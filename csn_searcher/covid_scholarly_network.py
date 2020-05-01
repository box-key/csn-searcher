from csn_searcher import ArticleList
from csn_searcher import SiameseModel

from sortedcontainers import SortedList

import torch

from tqdm import tqdm
import os


DEVICE_TYPE = 'cpu'

class Hypothesis():
    """
    Store an object of TrieNode and its parent.
    This class also stores the log conditional probability of a sequence ends
    at the input node.
    Attributes
    ----------
    node : TrieNode
        A trie node at the current level.
    lprob : float
        The negative log probability of current sequence which ends at the node.
    parent_hyp : Hypothesis
        The parent of itself to recover sentence later.
    """
    def __init__(self, section, similarity_score):
        self.similarity_score = similarity_score
        self.section = section

    def __lt__(self, other):
        return self.similarity_score < other.similarity_score

    def __eq__(self, other):
        return self.section.article_id == other.section.article_id

    def __repr__(self):
        return str(self.similarity_score)


class HypothesesList(SortedList):
    """
    This class is used to maintain hypothesis given by beam search, where all
    elements are stored in ascending order.
    It only stores maximum length (beam width) of elements. If a new element is
    smaller than any elements in the list, it discards the new element.
    """
    def __init__(self, max_len=0):
        super().__init__()
        self.max_len = max_len

    def _check_duplicate(self, candidate):
        for idx, hyp in enumerate(self.__iter__()):
            if hyp == candidate:
                return idx
        return -1

    def add(self, hypotheses):
        """
        Add new node if the list's capacity is not over or the new hypothesis
        is more probable than others.
        """
        if isinstance(hypotheses, Hypothesis):
            hypotheses = [hypotheses]
        if len(hypotheses) == 0:
            return
        if not isinstance(hypotheses[0], Hypothesis):
            raise AttributeError("This list only stores an object of Hypothesis.")
        for hyp in hypotheses:
            if (super().__len__() >= self.max_len) and (self.__getitem__(0) < hyp):
                # add new hypothesis and remove the least probable one
                duplicate_idx = self._check_duplicate(hyp)
                if duplicate_idx != -1:
                    super().pop(duplicate_idx)
                    super().add(hyp)
                else:
                    super().pop(0)
                    super().add(hyp)
            # if the list has space, add new one
            elif super().__len__() < self.max_len:
                super().add(hyp)

# list_path = os.path.join('csn_searcher', 'data', 'Article.List')
# list_temp_path = os.path.join('csn_searcher', 'data', 'ArticleCSN.List')

network_path = 'ArticleCSN.List'


class CSNSearcher:

    def __init__(self, build_network):
        self.article_list = ArticleList.load(network_path)
        self.siamese_model = SiameseModel(DEVICE_TYPE)
        if build_network:
            self._build_csn()

    def _build_csn(self):
        size = len(self.article_list)
        chunk = 100
        with tqdm(total=size, unit='article', desc='Building Network') as pbar:
            for count, article in enumerate(self.article_list.values()):
                for section in article:
                    tokens = section.get_tokens()
                    vector = self.siamese_model.sec2vec(tokens)
                    section.vector = vector
                if (count+chunk+1)%chunk == 0:
                    pbar.update(chunk)
                    self.article_list.save(list_temp_path)

    def search_kbest(self, input, k=3):
        input_vector = self.siamese_model.sec2vec(input)
        kbests = HypothesesList(k)
        for article in self.article_list.values():
            for section in article:
                if article.title == 'NA':
                    break
                if section.vector is not None:
                    l1_norm = torch.norm(section.vector - input_vector, p=1, dim=0)
                    # l1_norm = [batch_size]
                    similarity= torch.exp(-l1_norm)
                    hyp = Hypothesis(section=section,
                                     similarity_score=similarity)
                    kbests.add(hyp)
        results = []
        for hyp in kbests:
            similarity_score = hyp.similarity_score
            article_title = self.article_list[hyp.section.article_id]
            section_title = hyp.section.title
            results.append((similarity_score.tolist(),
                            article_title,
                            section_title))
        results.reverse()
        return results
