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

from csn_searcher.csn.section import Section
from csn_searcher.csn.article import Article, ArticleList
from csn_searcher.csn import utils


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

    def test_section_format(self):
        body = [['I have a pen. I have an apple'],
                ['I bought a new pair of shoes. They\'re awesome'],
                ['This is a test. Hello world.']]
        # section formatter should produce 3 paragraphs, 6 sentences
        section = Section(0, body, 'Test')
        assert len(section) == 3
        for para in section:
            assert len(para) == 2
            for sentence in para:
                assert isinstance(sentence[0], str)

    def test_default_methods(self):
        body = [['I have a pen. I have an apple'],
                ['I bought a new pair of shoes. They\'re awesome'],
                ['This is a test. Hello world.']]
        # section formatter should produce 3 paragraphs, 6 sentences
        section = Section(0, body, 'Test')
        para = section.get_paragraphs()
        assert len(para) == 3
        num_sen = section.num_sentences()
        assert num_sen == 6
        num_tokens = section.num_tokens()
        count = 0
        tokens = section.get_tokens()
        for _ in tokens:
            count += 1
        assert num_tokens == count


class TestArticle:

    def test_article(self):
        article = Article(1, 'Test')
        assert repr(article) == 'Test'
        assert len(article) == 0
        body = [['I have a pen. I have an apple'],
                ['I bought a new pair of shoes. They\'re awesome'],
                ['This is a test. Hello world.']]
        # section formatter should produce 3 paragraphs, 6 sentences
        section = Section(0, body, 'Test')
        article.append(section)
        assert len(article) == 1
        assert article[0] == section

    def test_article_list(self):
        list = ArticleList()
        assert len(list) == 0
        article1 = Article(1, 'Test')
        list[1] = article1
        article2 = Article(2, 'Test')
        list[2] = article2
        assert len(list) == 2
        del list[1]
        assert len(list) == 1
        del list[3]
        assert len(list) == 1
        list[1] = article1
        for key, value in list.items():
            assert key in [1, 2]

    def test_utils(self):
        articles = utils.read_json('C:\\Users\\under\\Datasets\\CORD-19-research-challenge\\2020-03-13\\test')
        assert len(articles) == 4
        formatted = utils.cord19_challenge_data_formatter(articles)
        assert len(formatted) == 4
        # check the body of 'biorxiv.json' in test folder
        title = "In trans variant calling reveals enrichment for compound heterozygous variants in genes involved in neuronal development and growth"
        assert title == formatted[0]['title']
        assert 'abstract' == formatted[0]['body_text'][0]['section_title']
        # two paragraphs in arstract
        assert len(formatted[0]['body_text'][0]['text']) == 2
        # six paragraphs in Introduction
        assert formatted[0]['body_text'][1]['section_title'] == 'Introduction'
        assert formatted[0]['body_text'][6]['section_title'] == 'Introduction'
        # 7th section is not Introduction
        assert formatted[0]['body_text'][7]['section_title'] != 'Introduction'
        # check the body of 'comm_use.json' in test folder
        title = "How Flaviviruses Activate and Suppress the Interferon Response"
        assert title == formatted[1]['title']
        assert 'abstract' == formatted[1]['body_text'][0]['section_title']
        assert len(formatted[1]['body_text'][0]['text']) == 1
        assert 'Abbreviations' == formatted[1]['body_text'][1]['section_title']
        # check the body of 'noncomm_use.json' in test folder
        title = "Molecular epidemiology and phylogenetic analysis of diverse bovine astroviruses associated with diarrhea in cattle and water buffalo calves in China"
        assert title == formatted[2]['title']
        assert 'abstract' == formatted[2]['body_text'][0]['section_title']
        assert len(formatted[2]['body_text'][0]['text']) == 1
        assert '' == formatted[2]['body_text'][1]['section_title']
        # check the body of 'pmc.json' in test folder
        title = "Respiratory viruses in children with cystic fibrosis: viral detection and clinical findings"
        assert title == formatted[3]['title']
        assert 'abstract' == formatted[3]['body_text'][0]['section_title']
        assert len(formatted[3]['body_text'][0]['text']) == 5
        assert formatted[3]['body_text'][2]['section_title'] == 'Study population'


    def test_add_articles(self):
        path = 'C:\\Users\\under\\Datasets\\CORD-19-research-challenge\\2020-03-13\\test'
        list = ArticleList()
        list.add_articles(path)
        # for k, v in list.items():
        #     print('\n', v)
        # test for biorxiv
        biorxiv = list[0]
        # check the last section
        assert repr(biorxiv[-1]) == 'Gene'
        # check the number of paragraphs
        assert len(biorxiv[1]) == 6
        # check the number of paragraphs
        assert len(biorxiv[2]) == 3
        # test for comm
        comm = list[1]
        # check the last section
        assert repr(comm[-1]) == 'Conclusions'
        # check the number of paragraphs
        assert len(comm[2]) == 1
        # check the number of paragraphs
        assert len(comm[4]) == 7
        # test for noncomm
        noncomm = list[2]
        # check the last section
        assert repr(noncomm[-1]) == 'DISCUSSION'
        # check the number of paragraphs
        assert len(noncomm[1]) == 3
        # check the number of paragraphs
        assert len(noncomm[2]) == 4
        # test for pmc
        pmc = list[3]
        # check the last section
        assert repr(pmc[-1]) == 'Discussion'
        # check the number of paragraphs
        assert len(pmc[0]) == 5
        # check the number of paragraphs
        assert len(pmc[3]) == 2
