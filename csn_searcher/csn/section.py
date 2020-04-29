import json

try:
    import spacy
except ImportError:
    raise ImportError('spacy is missing, please run `pip install spacy` and `pip install scispacy`.')

try:
    scispacy = spacy.load('en_core_sci_sm')
except OSError:
    raise OSError('model is not installed, please try the following:\n',
                  '`pip install https://s3-us-west-2.amazonaws.com/ai2-s2-scispacy/releases/v0.2.4/en_core_sci_sm-0.2.4.tar.gz`')


EMPTY_SYMBOL = 'NA'


class SectionPairs:
    """
    This class is to store pairs of sections with their seimilarity scores
    in json format to be read into torchtext.

    Attributes
    ----------
    sections_left : list of Section objects
        It contains the left side of section pairs.
    sections_right : list of Section objects
        It contains the left side of section pairs.
    similarity_scores : list of float
        It stores the similarity scores of section pairs.
    """
    def __init__(self, pairs, scores):
        self.sections_left = [pair[0] for pair in pairs]
        self.sections_right = [pair[1] for pair in pairs]
        self.similarity_scores = scores

    def to_json(self):
        return json.dumps(self.__dict__)


class Section:
    """
    Parameters
    ----------
    body : list
        This attribute represents the paragraphs, sentences and tokens as one
        list. It's wraps them in multiple layers:
        body = [[para_1], ..., [para_L]]
        para_i = [[sen_1], ..., [sen_M]]
        sen_j = [word_1, ..., word_N]
    paper_id : int
        This indicates which paper a section belongs to.
    title : str
        The title of a section.
    vector : tensor
        Section vector of output_dim defined in siamese_models module.
    """
    def __init__(self, article_id, paragraphs, title, vector=None):
        self.article_id = article_id
        self.vector = vector
        if len(title) == 0:
            self.title = EMPTY_SYMBOL
        else:
            self.title = title
        self.body = self._format_section(paragraphs)

    def __repr__(self):
        return self.title

    def __len__(self):
        return len(self.body)

    def __iter__(self):
        return iter(self.body)

    def _format_section(self, paragraphs):
        """
        Parameters
        ----------
        paragraphs : list of paragraphs
            It stores paragraphs as its elements.

        Returns
        -------
        body : list
            It stores input section into the following format:
            body = [[para_1], ..., [para_L]]
            para_i = [[sen_1], ..., [sen_M]]
            sen_j = [word_1, ..., word_N]
        """
        body = []
        # decompose the body into paragraphs.
        for para in paragraphs:
            paragraph = []
            # decompose paragraphs into sentences by scispacy
            with scispacy.disable_pipes("tagger"):
                _para = scispacy(para[0])
            for sentence in _para.sents:
                # tokenize each sentence by scispacy
                tokenized_sentence = [token.text for token in sentence]
                paragraph.append(tokenized_sentence)
            body.append(paragraph)
        return body

    def get_paragraphs(self):
        """ It returns all paragraphs in section. """
        return self.body

    def num_sentences(self):
        """ It returns the number of sentences in section. """
        count = 0
        for para in self.body:
            count += len(para)
        return count

    def get_sentence(self, para_idx):
        """ It returns a sentence in a paragraph specified by index """
        para = self.body[para_idx]
        return para

    def num_tokens(self):
        """ It returns the number of tokens in section. """
        count = 0
        for para in self.body:
            for sen in para:
                count += len(sen)
        return count

    def get_tokens(self):
        """ It returns all the tokens in section. """
        tokens = []
        for para in self.body:
            for sen in para:
                tokens += sen
        return tokens
