from collections import Counter
import torchtext
import torch

from torch.utils.data import Dataset


class TrainDataset(Dataset):
    """
    This class is used to train Siamese HAN model.

    Attributes
    ----------
    sections_left : list of Section objects
        It contains the left side of section pairs.
    sections_right : list of Section objects
        It contains the left side of section pairs.
    similarity_scores : list of float
        It stores the similarity scores of section pairs.
    """
    def __init__(self, pairs, scores, vocab):
        if len(pairs) != len(scores):
            raise AttributeError('pairs and scores have different legnths.')
        super().__init__()
        self.text_left = [pair[0] for pair in pairs]
        self.text_right = [pair[1] for pair in pairs]
        self.scores = scores
        self.vocab = vocab

    def __len__(self):
        return len(self.scores)

    def __getitem__(self, idx):
        body_left = self._numericalize(self.text_left, idx)
        body_right = self._numericalize(self.text_right, idx)
        score = torch.FloatTensor([self.scores[idx]])
        row = {'text_left': body_left,
               'text_right': body_right,
               'score': score}
        return row

    def _numericalize(self, data, idx):
        body = []
        section = data[idx]
        max_sen = 0
        max_token = 0
        # numericalize data
        for paragraph in section:
            if max_sen < len(paragraph):
                max_sen = len(paragraph)
            para = []
            for sentence in paragraph:
                sen = []
                if max_token < len(sentence):
                    max_token = len(sentence)
                for token in sentence:
                    sen.append(self.vocab.stoi[token])
                para.append(sen)
            body.append(para)
        # add pads
        for paragraph in body:
            for sentence in paragraph:
                sentence += sentence + [[0]*(max_token)]*(max_token-len(sentence))
            paragraph += paragraph + [[0]*(max_sen)]*(max_sen-len(paragraph))
        body = torch.LongTensor(body)
        print(body.shape)
        return body

    @classmethod
    def splits(cls, pairs, scores, train_ratio, test_ratio, vocab):
        train_idx = int(len(pairs)*train_ratio)
        train_pairs = pairs[:train_idx]
        train_scores = scores[:train_idx]
        train_data = cls(train_pairs, train_scores, vocab)
        test_pairs = pairs[train_idx:]
        test_scores = scores[train_idx:]
        test_data = cls(test_pairs, test_scores, vocab)
        return tuple(d for d in (train_data, test_data)
                     if d is not None)


class MyVocab(torchtext.vocab.Vocab):

    def __init__(self, counter):
        super().__init__(counter)

    @classmethod
    def build_vocab(cls, section_pairs):
        counter = Counter()
        for left, right in section_pairs:
            counter += Counter(left.get_tokens())
            counter += Counter(right.get_tokens())
        return cls(counter)
