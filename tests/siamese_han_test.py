import pytest

import spacy
import random

import torch
from torch.utils.data import DataLoader

from csn_searcher.siamese_models import SiameseTrainer, SiameseLSTMNet, SiameseHierarchicalAttentionNet
from csn_searcher.dataset import ScholaryArticleDataset, MyVocab
from csn_searcher.csn.article import ArticleList
from csn_searcher.csn.section import Section


# prepare data
path = 'C:\\Users\\under\\Datasets\\CORD-19-research-challenge\\2020-03-13\\test'
list = ArticleList()
list.add_articles(path)
# generate sample section pairs
pairs = []
articles_left = list.values()
articles_right = list.values()
sections_left = []
for a in articles_left:
    sections_left += a.sections
sections_right = []
for a in articles_right:
    sections_right += a.sections
pairs = []
for left, right in zip(sections_left, sections_right):
    pairs.append((left, right))
scores = [float(random.randint(0, 5)) for _ in range(len(pairs))]
vocab = MyVocab.build_vocab(pairs)
data = ScholaryArticleDataset(pairs, scores, vocab)
train, val = ScholaryArticleDataset.splits(pairs=pairs,
                                            scores=scores,
                                            train_ratio=0.8,
                                            test_ratio=0.2,
                                            vocab=vocab)
BATCH_SIZE = 4
train_iter = DataLoader(train, batch_size=BATCH_SIZE)
val_iter = DataLoader(val, batch_size=BATCH_SIZE)
# parametes of model
INPUT_DIM = len(vocab)
EMB_DIM = 256
TOKEN_HID_DIM = 1024
SEN_HID_DIM = 1024
PARA_HID_DIM = 1024
OUT_DIM = 1024
DROPOUT = 0.2
N_LAYERS = 4
PAD_IDX = vocab.stoi['<pad>']
SOS_IDX = vocab.stoi['<sos>']
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

class TestData:

    def test_custom_class(self):
        path = 'C:\\Users\\under\\Datasets\\CORD-19-research-challenge\\2020-03-13\\test'
        list = ArticleList()
        list.add_articles(path)
        # generate sample section pairs
        pairs = []
        articles_left = list.values()
        articles_right = list.values()
        sections_left = []
        for a in articles_left:
            sections_left += a.sections
        sections_right = []
        for a in articles_right:
            sections_right += a.sections
        pairs = []
        for left, right in zip(sections_left, sections_right):
            pairs.append((left, right))
        scores = [random.randint(0, 5) for _ in range(len(pairs))]
        vocab = MyVocab.build_vocab(pairs)
        # print(len(vocab))
        # for i in range(30):
        #     print(vocab.itos[i])
        # print(type(vocab.stoi['the']))
        # print(torch.FloatTensor([vocab.stoi['the']]))
        data = ScholaryArticleDataset(pairs, scores, vocab)
        train, test = ScholaryArticleDataset.splits(pairs=pairs,
                                                    scores=scores,
                                                    train_ratio=0.8,
                                                    test_ratio=0.2,
                                                    vocab=vocab)
        assert len(data) == ((len(train) + len(test)))
        BATCH_SIZE = 4
        train_iter = DataLoader(train, batch_size=BATCH_SIZE, shuffle=True)
        test_iter = DataLoader(test, batch_size=BATCH_SIZE, shuffle=True)
        for i in train_iter:
            pass
        for i in test_iter:
            pass

class TestSiamenseHAN:

    def test_siameselstm_init(self):
        """ Test initializer of Siamese LSTM class """
        # initialize a model
        model = SiameseHierarchicalAttentionNet(
                    input_dim=INPUT_DIM,
                    emb_dim=EMB_DIM,
                    token_hid_dim=TOKEN_HID_DIM,
                    sen_hid_dim=SEN_HID_DIM,
                    para_hid_dim=PARA_HID_DIM,
                    output_dim=OUT_DIM,
                    n_layers=N_LAYERS,
                    dropout=DROPOUT,
                    pad_idx=PAD_IDX,
                    sos_idx=SOS_IDX,
                    device=device
                )
        # make sure the network holds input property
        assert model.token_layer.hid_dim == TOKEN_HID_DIM
        assert model.token_layer.emb_dim == EMB_DIM

    def test_trainer_init(self):
        """ Test initializer of SiameseTrainer class """
        model = SiameseHierarchicalAttentionNet(
                    input_dim=INPUT_DIM,
                    emb_dim=EMB_DIM,
                    token_hid_dim=TOKEN_HID_DIM,
                    sen_hid_dim=SEN_HID_DIM,
                    para_hid_dim=PARA_HID_DIM,
                    output_dim=OUT_DIM,
                    n_layers=N_LAYERS,
                    dropout=DROPOUT,
                    pad_idx=PAD_IDX,
                    sos_idx=SOS_IDX,
                    device=device
                )
        LEARNING_RATE = 0.0001
        adam = torch.optim.Adam(model.parameters(), lr=LEARNING_RATE)
        # check initializer of trainer class
        trainer = SiameseTrainer(model=model,
                                 train_iterator=train_iter,
                                 val_iterator=val_iter,
                                 optimizer=adam,
                                 device=device)

    def test_epoch(self):
        """ Test epoch method in SiameseTrainer """
        model = SiameseHierarchicalAttentionNet(
                    input_dim=INPUT_DIM,
                    emb_dim=EMB_DIM,
                    token_hid_dim=TOKEN_HID_DIM,
                    sen_hid_dim=SEN_HID_DIM,
                    para_hid_dim=PARA_HID_DIM,
                    output_dim=OUT_DIM,
                    n_layers=N_LAYERS,
                    dropout=DROPOUT,
                    pad_idx=PAD_IDX,
                    sos_idx=SOS_IDX,
                    device=device
                )
        LEARNING_RATE = 0.0001
        adam = torch.optim.Adam(model.parameters(), lr=LEARNING_RATE)
        # check initializer of trainer class
        trainer = SiameseTrainer(model=model,
                                 train_iterator=train_iter,
                                 val_iterator=val_iter,
                                 optimizer=adam,
                                 device=device)
        trainer.epoch(n_epochs=2, clip=1, model_name='siamense-han.pt')

model = SiameseHierarchicalAttentionNet(
            input_dim=INPUT_DIM,
            emb_dim=EMB_DIM,
            token_hid_dim=TOKEN_HID_DIM,
            sen_hid_dim=SEN_HID_DIM,
            para_hid_dim=PARA_HID_DIM,
            output_dim=OUT_DIM,
            n_layers=N_LAYERS,
            dropout=DROPOUT,
            pad_idx=PAD_IDX,
            sos_idx=SOS_IDX,
            device=device
        )
LEARNING_RATE = 0.0001
adam = torch.optim.Adam(model.parameters(), lr=LEARNING_RATE)
# check initializer of trainer class
trainer = SiameseTrainer(model=model,
                         train_iterator=train_iter,
                         val_iterator=val_iter,
                         optimizer=adam,
                         device=device)
trainer.epoch(n_epochs=2, clip=1, model_name='siamense-han.pt')
