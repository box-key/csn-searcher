from collections.abc import MutableMapping, MutableSequence

from .section import Section


EMPTY_SYMBOL = 'NA'


class Article(MutableSequence):

    def __init__(self, id, title):
        self.sections = list()
        self.id = id
        if len(title) == 0:
            self.title = EMPTY_SYMBOL
        else:
            self.title = title

    def __repr__(self):
        return self.id

    def __len__(self):
        return self.sections

    def __iter__(self):
        return iter(self.sections)

    def append(self, section):
        sections.append(section)


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

    def construct_list(self, articles, type):
        assert type in ['pmc'], \
            "type should be either one of [pmc]"
        current_id = len(self)
        for id, article in enumerate(pmc_articles, start=current_id):
            # get the title of article
            if type=='pmc':
                title = article['metadata']['title']
            # initialize an Article object
            _article = Article(id, title)
            # get the first section name to initialize loop
            if type=='pmc':
                curr_section_name = article['body_text'][0]['section']
                sections = article['body_text']
            section_paragraphs = []
            # iterate through sections pieces in the article
            for section in sections:
                if type=='pmc':
                    next_section_name = section['section']
                    paragraph = section['text']
                if curr_section_name == next_section_name:
                    section_paragraphs.append(paragraph)
                else:
                    # make a Section object
                    _section = Section(article_id=id,
                                       title=curr_section_name,
                                       section=section_paragraphs)
                    # store the object into article
                    _article.append(_section)
                    # empty the paragraph list
                    section_paragraphs.clear()
                curr_section_name = next_section_name
            # store the article into dictionary with its id
            self[id] = _article
