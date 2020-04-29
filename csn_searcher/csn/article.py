from collections.abc import MutableMapping
from .section import Section
from . import utils


EMPTY_SYMBOL = 'NA'


class Article:

    def __init__(self, id, title):
        self.sections = list()
        self.id = id
        if len(title) == 0:
            self.title = EMPTY_SYMBOL
        else:
            self.title = title

    def __repr__(self):
        return self.title

    def __len__(self):
        return len(self.sections)

    def __iter__(self):
        return iter(self.sections)

    def __getitem__(self, idx):
        return self.sections[idx]

    def append(self, section):
        if not isinstance(section, Section):
            raise AttributeError('Article only taks Section instance.')
        self.sections.append(section)


class ArticleList(MutableMapping):

    def __init__(self):
        self.dict = dict()

    def __getitem__(self, id):
        try:
            item = self.dict[self.__keytransform__(id)]
        except KeyError:
            item = -1
        return item

    def __setitem__(self, id, article):
        if not isinstance(article, Article):
            raise AttributeError('ArticleList only taks Article instance.')
        self.dict[self.__keytransform__(id)] = article

    def __delitem__(self, id):
        try:
            del self.dict[self.__keytransform__(id)]
        except KeyError:
            pass

    def __iter__(self):
        return iter(self.dict)

    def __len__(self):
        return len(self.dict)

    def __keytransform__(self, id):
        return id

    def get(self, title):
        for key, value in self.dict:
            if title == value:
                return value
        return -1

    def add_articles(self, path, type='cord19'):
        articles = utils.read_json(path)
        if type=='cord19':
            articles = utils.cord19_challenge_data_formatter(articles)
        current_id = len(self.dict)
        for id, article in enumerate(articles, start=current_id):
            # get the title of article
            title = article['title']
            # initialize an Article object
            _article = Article(id, title)
            # get the first section name to initialize loop
            paragraph_blocks = article['body_text']
            # first element is abstract whose paragraphs are grouped already
            section = Section(article_id=id,
                               title=paragraph_blocks[0]['section_title'],
                               paragraphs=paragraph_blocks[0]['text'])
            _article.append(section)
            curr_section_name = paragraph_blocks[1]['section_title']
            temp = []
            # iterate through sections pieces in the article
            for para_block in paragraph_blocks[1:]:
                next_section_name = para_block['section_title']
                if curr_section_name != next_section_name:
                    # make a Section object
                    section = Section(article_id=id,
                                      title=curr_section_name,
                                      paragraphs=temp)
                    # store the object into article
                    _article.append(section)
                    temp.clear()
                temp.append(para_block['text'])
                curr_section_name = next_section_name
            # add the last seciton of article
            section = Section(article_id=id,
                              title=curr_section_name,
                              paragraphs=temp)
            _article.append(section)
            # empty paragraph list
            temp.clear()
            # store the article into dictionary with its id
            self.__setitem__(id, _article)
