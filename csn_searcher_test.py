import pytest

try:
    import spacy
except ImportError:
    raise ImportError('spacy is missing, please run `pip install spacy` and `pip install scispacy`.')

try:
    scispacy = spacy.load('en_core_sci_sm')
except OSError:
    raise OSError('model is not installed, please try the following:\n',
                  '`pip install https://s3-us-west-2.amazonaws.com/ai2-s2-scispacy/releases/v0.2.4/en_core_sci_sm-0.2.4.tar.gz`')


class TestSection:

    def test_spacy_import(self):
        """ Test exception handling for spacy. """
        try:
            import spacy
        except ImportError:
            raise ImportError('spacy is missing, please run `pip install spacy` and `pip install scispacy`.')
        try:
            scispacy = spacy.load('en_core_sci_sm')
        except OSError:
            raise OSError('model is not installed, please try the following:\n',
                          '`pip install https://s3-us-west-2.amazonaws.com/ai2-s2-scispacy/releases/v0.2.4/en_core_sci_sm-0.2.4.tar.gz`')

    def test_spacy_tokenization(self):
        """
        Test spacy's tokenizer and sentencenizer to construct body of
        section in Section class.
        """
        text = "I have an orange. I have an apple. But, don't compare an " + \
               "apple to an orange."
        # disable irrelevant feature
        with scispacy.disable_pipes("tagger"):
            _text = scispacy(text)
        paragraph = []
        for sentence in _text.sents:
            # tokenize each sentence by scispacy
            tokenized = [token.text for token in sentence]
            paragraph.append(tokenized)
        # make sure it splits text into 3 sentences.
        assert len(paragraph) == 3
        # make sure each sentence is tokenized
        for sentence in paragraph:
            assert isinstance(sentence, list)
            assert isinstance(sentence[0], str)
