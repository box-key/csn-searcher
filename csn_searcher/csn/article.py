from collections.abc import MutableMapping, MutableSet

from .section import Section
from .utils import pmc_formatter


EMPTY_SYMBOL = 'NA'


class Article(MutableSet):

    def __init__(self, id, title):
        self.sections = set()
        self.id = id
        if len(title) == 0:
            self.title = EMPTY_SYMBOL
        else:
            self.title = title

    def __repr__(self):
        return self.title

    def __len__(self):
        return self.sections

    def __iter__(self):
        return iter(self.sections)

    def add(self, section):
        self.sections.add(section)


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
        return self.dict[self.__keytransform__(id)] = article

    def __delitem__(self, id):
        del self.dict[self.__keytransform__(id)]

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

    def construct_list(self, articles, type='cord19'):
        if type=='cord19':
            articles = cord19_challenge_data_formatter(articles)
        current_id = len(self)
        for id, article in enumerate(pmc_articles, start=current_id):
            # get the title of article
            title = article['title']
            # initialize an Article object
            _article = Article(id, title)
            # get the first section name to initialize loop
            curr_section_name = article['body_text'][0]['section_title']
            sections = article['body_text']
            section_paragraphs = []
            # iterate through sections pieces in the article
            for section in sections:
                next_section_name = section['section_title']
                paragraph = section['text']
                if curr_section_name == next_section_name:
                    section_paragraphs.append(paragraph)
                else:
                    # make a Section object
                    _section = Section(article_id=id,
                                       title=curr_section_name,
                                       section=section_paragraphs)
                    # store the object into article
                    _article.add(_section)
                    # empty the paragraph list
                    section_paragraphs.clear()
                curr_section_name = next_section_name
            # store the article into dictionary with its id
            self.__setitem__(id, _article)
