import torch
import torch.nn as nn
import torch.nn.functional as F


class SiameseLSTM(nn.Module):

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
        self.lstm = nn.LSTM(emb_dim,
                            hid_dim,
                            n_layers,
                            bidirectional=True,
                            dropout=dropout)
        self.fc_out = nn.Linear(hid_dim*2, hid_dim)
        self.dropout = nn.Dropout(dropout)
        self.device = device

    def forward(self, text):
        # text = [text_len, batch_size]
        embedded = self.embedding(text)
        # embedded = [text_len, batch_size, emb_dim]
        output, (hidden, cell) = self.lstm(embedded)
        # output = [text_len, batch_size, hid_dim*2]
        # hidden = [n_layers*2, batch_size, hid_dim]
        # cell = [n_layers*2, batch_size, hid_dim]
        # extract the the top layer of forward network and backword network
        # then, feed them into feedforward layer
        hidden_toplayer = self.fc_out(torch.cat((hidden[-2, :, :], hidden[-1, :, :]), dim=1))
        # output = [batch_size, hid_dim]
        return hidden_toplayer


class SiameseNet(nn.Module):

    def __init__(self,
                 input_dim,
                 emb_dim,
                 hid_dim,
                 dropout,
                 n_layers,
                 pad_idx,
                 device,
                 score_scale=1):
        super().__init__()
        self.lstm = SiameseLSTM(
                        input_dim=input_dim,
                        emb_dim=emb_dim,
                        hid_dim=hid_dim,
                        dropout=dropout,
                        n_layers=n_layers,
                        pad_idx=pad_idx,
                        device=device
                    )
        self.score_scale = torch.FloatTensor([score_scale]).to(device)

    def forward(self, text_left, text_right):
        # text_left = [text_left_len, batch_size]
        # text_right = [text_right_len, batch_size]
        output_left = self.lstm(text_left)
        # output_left = [batch_size, hid_dim]
        output_right = self.lstm(text_right)
        # output_right = [batch_size, hid_dim]
        # calculate l1 norm between left and right outputs
        l1_norm = torch.norm(output_left - output_right, p=1, dim=1)
        # l1_norm = [batch_size]
        # compute Siamese distance
        distance = torch.exp(-l1_norm)
        # since distance range is [0, 1], rescale it; default scaler is 1.0
        output = l1_norm * self.score_scale
        return output
