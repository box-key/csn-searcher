import torch
import torch.nn as nn
import torch.nn.functional as F


class TokenLayer(nn.Module):

    def __init__(self,
                 input_dim,
                 emb_dim,
                 hid_dim,
                 dropout,
                 n_layers,
                 pad_idx,
                 device):
        super().__init__()
        self.input_dim = input_dim
        self.emb_dim = emb_dim
        self.hid_dim = hid_dim
        self.embedding = nn.Embedding(input_dim, emb_dim, padding_idx=pad_idx)
        self.lstm = nn.LSTM(emb_dim + hid_dim,
                            hid_dim,
                            n_layers,
                            bidirectional=True,
                            dropout=dropout)
        self.fc_out = nn.Linear(hid_dim*2, hid_dim)

    def forward(self, sentence):
        # text = [sentence_len, batch_size]
        embedded = self.embedding(sentence)
        # embedded = [sentence_len, batch_size, emb_dim]
        output, (hidden, cell) = self.lstm(embedded)
        # output = [sentence_len, batch_size, hid_dim*2]
        # hidden = [n_layers*2, batch_size, hid_dim]
        # cell = [n_layers*2, batch_size, hid_dim]
        # extract the the top layer of forward network and backword network
        # then, feed them into feedforward layer
        hidden_top = self.fc_out(
                        torch.cat((hidden[-2, :, :], hidden[-1, :, :]), dim=1)
                      )
        # hidden_top = [batch_size, hid_dim]
        return output, hidden_top


class Attention(nn.Module):

    def __init__(self, prev_hid_dim, curr_hid_dim, device):
        super().__init__()
        self.e = nn.Linear(prev_hid_dim*2, curr_hid_dim)
        self.v = nn.Linear(curr_hid_dim, 1, bias=False)
        self.device = device

    def forward(self, prev_layer_outputs, mask=None):
        # hidden = [batch_size, curr_hid_dim]
        # prev_layer_outputs = [prev_layer_len, batch_size, prev_hid_dim*2]
        prev_len = prev_layer_outputs.shape[0]
        batch_size = prev_layer_outputs.shape[1]
        # repeat decoder hidden state src_len times
        hidden = hidden.unsqueeze(1).repeat(1, prev_layer_len, 1).to(self.device)
        # hidden = [batch size, prev_layer_len, curr_hid_dim]
        prev_layer_outputs = prev_layer_outputs.permute(1, 0, 2)
        # prev_layer_outputs = [batch size, prev_layer_len, prev_hid_dim*2]
        energy = torch.tanh(self.e(prev_layer_outputs))
        # energy = [batch size, prev_layer_len, curr_hid_dim]
        attention = self.v(energy).squeeze(2)
        # attention = [batch size, prev_layer_len]
        if mask is not None:
            # apply mask on attention to prevent decoder from attending pad tokens
            attention = attention.masked_fill(mask == 0, -1e10).to(self.device)
        attention_weights = F.softmax(attention, dim=1)
        # attention_weights = [batch_size, prev_layer_len]
        weighted_sum = torch.bmm(attention_weights.unsequeeze(1),
                                 prev_layer_outputs)
        # weighted_sum = [batch_size, 1, prev_hid_dim*2]
        weighted_sum = weighted_sum.permute(1, 0, 2)
        # weighted = [1, batch_size, prev_hid_dim*2]
        return weighted_sum


class MiddleLayer(nn.Module):

    def __init__(self,
                 curr_hid_dim,
                 prev_hid_dim,
                 dropout,
                 n_layers,
                 device):
        super().__init__()
        self.attention = Attention(prev_hid_dim=prev_hid_dim,
                                   device=device)
        self.lstm = nn.LSTM(prev_hid_dim*2 + curr_hid_dim,
                            curr_hid_dim,
                            n_layers,
                            bidirectional=True,
                            dropout=dropout)
        self.fc_out = nn.Linear(curr_hid_dim*2, curr_hid_dim)
        self.device = device
        self.n_layers = n_layers

    def forward(self, prev_layer_outputs, hidden, mask):
        # prev_layer_outputs = [prev_layer_len, batch_size, prev_hid_dim*2]
        # hidden = [n_layers*2, batch_size, curr_hid_dim]
        weighted = self.attention(prev_layer_outputs=prev_layer_outputs,
                                  mask=mask)
        # weighted = [1, batch_size, prev_hid_dim*2]
        weighted = weighted.repeat(self.n_layers*2, 1, 1)
        # weighted = [n_layers*2, batch_size, prev_hid_dim*2]
        rnn_input = torch.cat((hidden, weighted), dim=2).to(self.device)
        # rnn_input = [n_layers*2, batch_size, (prev_hid_dim*2) + curr_hid_dim]
        output, (hidden, cell) = self.lstm(rnn_input, hidden)
        # output = [1, batch_size, curr_hid_dim*2]
        # hidden = [n_layers*2, batch_size, curr_hid_dim*2]
        # cell = [n_layers*2, batch_size, sen_hid_dim]
        return output, hidden


class SiameseHierarchicalAttentionNet(nn.Module):

    def __init__(self):
        super().__init__()
        self.token_layer = TokenLayer(input_dim=input_dim,
                                      emb_dim=emb_dim,
                                      hid_dim=token_hid_dim,
                                      dropout=dropout,
                                      n_layers=n_layers,
                                      pad_idx=pad_idx,
                                      device=device)
        self.sentence_layer = MiddleLayer(curr_hid_dim=sen_hid_dim,
                                          prev_hid_dim=token_hid_dim,
                                          dropout=dropout,
                                          n_layers=n_layers,
                                          device=device)
        self.paragraph_layer = MiddleLayer(curr_hid_dim=sen_hid_dim,
                                           prev_hid_dim=token_hid_dim,
                                           dropout=dropout,
                                           n_layers=n_layers,
                                           device=device)
        self.attention = Attention(prev_hid_dim=para_hid_dim,
                                   curr_hid_dim=output_dim,
                                   device=device)
        self.pad_idx = pad_idx
        self.batch_size = batch_size
        self.sen_hid_dim = sen_hid_dim
        self.para_hid_dim = para_hid_dim
        self.sos_tensor = torch.zeros(self.batch_size) + sos_idx

    def create_mask(self, text):
        # text = [text_len, batch_size]
        mask = (text != self.pad_idx).permute(1, 0)
        # mask = [text_len, batch_size]
        return mask

    def sec2vec(section, batch_size):
        # section_len = the number of paragraphs per sentence
        # paragraph_len = the number of sentences per paragraph
        # sentence_len = the number of words per sentence
        # store paragraph-level hidden vectors
        paragraph_outpus = []
        # initial state for paragraph and sentense are <sos>
        para_hidden = self.sos_tensor
        sen_hidden = self.sos_tensor
        for row_para, paragraph in enumerate(section):
            # store sentence-level hihdden vectors
            sentence_outputs = []
            for row_sen, sentence in enumerate(paragrapha):
                # get token-level hidden nodes
                token_outptus, _ = self.token_layer(sentence)
                mask = self.create_mask(sentence)
                # obtain a sentence vector
                sen_output, sen_hidden = self.sentence_layer(token_outptus,
                                                             sen_hidden,
                                                             mask)
                # sen_output = [1, batch_size, sen_hid_dim*2]
                # sen_hidden = [n_layers*2, batch_size, sen_hid_dim]
                sentence_outputs.append(sen_output)
            # convert list into a tensor
            sentense_outputs = torch.cat(sentence_outputs, dim=0)
            # sentence_outputs = [paragraph_len, batch_size, sen_hid_dim]
            para_output, para_hidden = self.paragraph_layer(sentence_outputs,
                                                            para_hidden)
            # para_output = [1, batch_size, para_hid_dim*2]
            # para_hidden = [n_layers*2, batch_size, para_hid_dim*2]
            paragraph_outpus.append(para_output)
        paragraph_outpus = torch.cat(paragraph_outputs, dim=0)
        # sentence_outputs = [section_len, batch_size, sen_hid_dim]
        section_vector = self.attention(paragraph_outpus)
        # section_vector = [1, batch_size, output_dim]
        section_vector = section_vector.squeeze(0)
        # section_vector = [batch_size, output_dim]
        return section_vector

    def forward(self, section_left, section_right):
        output_left = self.sec2vec(section_left)
        # output_left = [batch_size, output_dim]
        output_right = self.sec2vec(seection_right)
        # output_right = [batch_size, output_dim]
        # calculate l1 norm between left and right outputs
        l1_norm = torch.norm(output_left - output_right, p=1, dim=1)
        # l1_norm = [batch_size]
        # compute Siamese distance
        distance = torch.exp(-l1_norm)
        # since distance range is [0, 1], rescale it; default scaler is 1.0
        output = l1_norm * self.score_scale
        return output
