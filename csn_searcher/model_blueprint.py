from .siamese_models.siamese_lstm import SiameseLSTMNet
from .loader import DataLoader

import dill

import torch
import torchtext

# try:
#     import spacy
# except ImportError:
#     raise ImportError('spacy is missing, please run `pip install spacy` and `pip install scispacy`.')
#
# try:
#     scispacy = spacy.load('en_core_sci_sm')
# except OSError:
#     raise OSError('model is not installed, please try the following:\n',
#                   '`pip install https://s3-us-west-2.amazonaws.com/ai2-s2-scispacy/releases/v0.2.4/en_core_sci_sm-0.2.4.tar.gz`')

# to fix torchtext's bug
from torchtext import vocab
try:
    vocab._default_unk_index
except AttributeError:
    def _default_unk_index():
        return 0
    vocab._default_unk_index = _default_unk_index

EMB_DIM = 300
HID_DIM = 1024
DROPOUT = 0.1
N_LAYERS = 4


class SiameseModel():

    def __init__(self, device_type):
        self.loader = DataLoader()
        self.TEXT = self._load_dill(self.loader.text_field_path)
        self.device = torch.device(device_type)
        self.model = SiameseLSTMNet(
                        input_dim=len(self.TEXT.vocab),
                        emb_dim=EMB_DIM,
                        hid_dim=HID_DIM,
                        dropout=DROPOUT,
                        n_layers=N_LAYERS,
                        pad_idx=self.TEXT.vocab.stoi['<pad>'],
                        device=self.device,
                        score_scale=4
                    ).to(self.device)
        self._load_model()

    def _load_dill(self, path):
        with open(path, 'rb') as f:
            obj = dill.load(f)
        return obj

    def _load_model(self):
        self.model.load_state_dict(
            torch.load(self.loader.model_path, map_location=self.device)
        )

    def sec2vec(self, input_section):
        if isinstance(input_section, str):
            # with scispacy.disable_pipes("tagger"):
            #     _input_section = scispacy(input_section)
                # input_section = [token.text.lower() for token in _input_section]
            input_section = input_section.split()
        input_section = [self.TEXT.init_token] + input_section + \
                        [self.TEXT.eos_token]
        enc_section = [self.TEXT.vocab.stoi[token] for token in input_section]
        section_tensor = torch.LongTensor(enc_section).to(self.device)
        # section_tensor = [section_len]
        section_tensor = section_tensor.unsqueeze(1)
        # section_tensor = [section_len, 1]
        with torch.no_grad():
            output = self.model.lstm(section_tensor)
        # output = [1, output_dim]
        output = output.squeeze(0)
        # output = [output_dim]
        return output
