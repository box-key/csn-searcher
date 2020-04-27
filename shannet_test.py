import pytest

import spacy

import torch
from torchtext.data import Field, RawField
from torchtext.data import TabularDataset
from torchtext.data import Iterator, BucketIterator

from shannet import SiameseNet, SiameseTrainer
from shannet.siamese_lstm import SiameseLSTM

# load tokenizer
scispacy_en = spacy.load('en_core_sci_sm')
# define fields
TEXT = Field(
         sequential=True,
         tokenize=lambda x: [token.text for token in scispacy_en(x)],
         init_token = '<sos>',
         eos_token = '<eos>'
       )
SCORE = RawField(preprocessing=lambda x: float(x))
fields = [('id', None),
          ('text_left', TEXT),
          ('text_right', TEXT),
          ('score', SCORE),
          ('judge', None)]
# load data
train, val = TabularDataset.splits(
                 path='C:\\Users\\under\\Datasets\\Text Similarity\\sick_trial',
                 train='SICK_trial.txt',
                 validation='SICK_trial.txt',
                 format='tsv',
                 skip_header=True,
                 fields=fields
             )
print('Datasize:', len(train))
TEXT.build_vocab(train,
                 vectors='glove.840B.300d',
                 unk_init=torch.Tensor.normal_)
# generate iterators
BATCH_SIZE = 16
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
train_iter, val_iter = BucketIterator.splits(
                            (train, val),
                            batch_size=BATCH_SIZE,
                            device=device,
                            sort_within_batch=True,
                            sort_key=lambda x: len(x.text_left) + len(x.text_right)
                       )

PAD_IDX = TEXT.vocab.stoi['<pad>']
EMB_DIM = 300
HID_DIM = 1024
DROPOUT = 0.2
N_LAYERS = 4

class TestShannet:

    def test_siameselstm_init(self):
        """ Test initializer of Siamese LSTM class """
        # initialize a model
        model = SiameseNet(
                    input_dim=len(TEXT.vocab),
                    emb_dim=EMB_DIM,
                    hid_dim=HID_DIM,
                    dropout=DROPOUT,
                    n_layers=N_LAYERS,
                    pad_idx=PAD_IDX,
                    device=device,
                )
        # make sure the network holds input property
        assert model.lstm.hid_dim == 1024
        assert model.lstm.device == device

    def test_trainer_init(self):
        """ Test initializer of SiameseTrainer class """
        model = SiameseNet(
                    input_dim=len(TEXT.vocab),
                    emb_dim=EMB_DIM,
                    hid_dim=HID_DIM,
                    dropout=DROPOUT,
                    n_layers=N_LAYERS,
                    pad_idx=PAD_IDX,
                    device=device,
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
        model = SiameseNet(
                    input_dim=len(TEXT.vocab),
                    emb_dim=EMB_DIM,
                    hid_dim=HID_DIM,
                    dropout=DROPOUT,
                    n_layers=N_LAYERS,
                    pad_idx=PAD_IDX,
                    device=device,
                )
        LEARNING_RATE = 0.0001
        adam = torch.optim.Adam(model.parameters(), lr=LEARNING_RATE)
        # check initializer of trainer class
        trainer = SiameseTrainer(model=model,
                                 train_iterator=train_iter,
                                 val_iterator=val_iter,
                                 optimizer=adam,
                                 device=device)
        trainer.epoch(n_epochs=2, clip=1, model_name='siamense-lstm.pt')

model = SiameseNet(
            input_dim=len(TEXT.vocab),
            emb_dim=EMB_DIM,
            hid_dim=HID_DIM,
            dropout=DROPOUT,
            n_layers=N_LAYERS,
            pad_idx=PAD_IDX,
            device=device,
        )
LEARNING_RATE = 0.0001
adam = torch.optim.Adam(model.parameters(), lr=LEARNING_RATE)
# check initializer of trainer class
trainer = SiameseTrainer(model=model,
                         train_iterator=train_iter,
                         val_iterator=val_iter,
                         optimizer=adam,
                         device=device)
trainer.epoch(n_epochs=2, clip=1, model_name='siamense-lstm.pt')
