from collections.abc import MutableMapping

import dill
from tqdm import tqdm
import os
import requests

from .section import Section
from . import utils


EMPTY_SYMBOL = 'NA'
ARTICLELIST_URL = 'https://www.dropbox.com/s/e054kcihhrgjqzt/ArticleCSN.List?dl=1'


class Article:

    def __init__(self, id, title):
        self.sections = list()
        self.id = id
        if len(title) == 0:
            self.title = EMPTY_SYMBOL
        else:
            # self.title = title.lower()
            self.title = title

    def __repr__(self):
        return self.title

    def __len__(self):
        return len(self.sections)

    def __iter__(self):
        return iter(self.sections)

    def __getitem__(self, idx):
        return self.sections[idx]

    def num_tokens(self):
        count = 0
        for section in self.sections:
            count += section.num_tokens()
        return count

    def append(self, section):
        if not isinstance(section, Section):
            raise AttributeError('Article only taks Section instance.')
        self.sections.append(section)


class ArticleList(MutableMapping):

    def __init__(self):
        self.dict = dict()
        self.current_id = 0

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

    def save(self, path):
        if '.List' not in path:
            raise AttributeError('path does not inlcude .List extension.')
        with open(path, 'wb') as f:
            dill.dump(self, f)

    @classmethod
    def load(cls, path):
        if '.List' not in path:
            raise AttributeError('path does not inlcude .List extension.')
        if not os.path.exists(path):
            r  = requests.get(ARTICLELIST_URL, stream=True)
            with open(path, 'wb') as f:
                size = int(r.headers.get('content-length'))
                task = 'Download COVID-19 Scholarly article Network.'
                chunk_size = 2*20
                # print progress bar
                with tqdm(total=size, unit=' data', desc=task) as pbar:
                    for chunk in r.iter_content(chunk_size=chunk_size):
                        if chunk:
                            f.write(chunk)
                            f.flush()
                            pbar.update(len(chunk))
        with open(path, "rb") as f:
            obj = dill.load(f)
        return obj

    # def _get_bib(self, bibref, article, lookup):
    #     title = article['bib_entries'][bibref]['title'].lower()
    #     return lookup.article2id(title)

    def add_articles(self, path, lookup=None, type='cord19'):
        articles = utils.read_json(path)
        if type=='cord19':
            articles = utils.cord19_challenge_data_formatter(articles)
        size = len(articles)
        chunk = 100
        with tqdm(total=size, unit='article', desc='Loading Articles') as pbar:
            for id, article in enumerate(articles, start=self.current_id):
                # get the title of article
                title = article['title']
                # initialize an Article object
                _article = Article(id, title)
                # get the first section name to initialize loop
                paragraph_blocks = article['body_text']
                # first element is abstract whose paragraphs are grouped already
                # temp_bib = []
                # for bibref in paragraph_blocks[0]['cite_spans']:
                #     bib_id = self._get_bib(bibref, article, lookup)
                #     if bib_id != -1:
                #         temp_bib.append(bib_id)
                # section = Section(article_id=id,
                #                   title=paragraph_blocks[0]['section_title'],
                #                   paragraphs=paragraph_blocks[0]['text'],
                #                   citations=temp_bib)

                section = Section(article_id=id,
                                  title=paragraph_blocks[0]['section_title'],
                                  paragraphs=paragraph_blocks[0]['text'])
                _article.append(section)
                if len(paragraph_blocks) > 1:
                    curr_section_name = paragraph_blocks[1]['section_title']
                    temp_text = []
                    temp_bib = []
                    # iterate through sections pieces in the article
                    for para_block in paragraph_blocks[1:]:
                        next_section_name = para_block['section_title']
                        # for bibref in para_block['cite_spans']:
                        #     bib_id = self._get_bib(bibref, article, lookup)
                        #     if bib_id != -1:
                        #         temp_bib.append(bib_id)
                        if curr_section_name != next_section_name:
                            # make a Section object
                            # section = Section(article_id=id,
                            #                   title=curr_section_name,
                            #                   paragraphs=temp_text,
                            #                   citations=temp_bib)
                            section = Section(article_id=id,
                                              title=curr_section_name,
                                              paragraphs=temp_text)
                            # store the object into article
                            _article.append(section)
                            temp_text.clear()
                            # temp_bib.clear()
                        temp_text.append(para_block['text'])
                        curr_section_name = next_section_name
                    # add the last seciton of article
                    # section = Section(article_id=id,
                    #                   title=curr_section_name,
                    #                   paragraphs=temp_text,
                    #                   citations=temp_bib)
                    section = Section(article_id=id,
                                      title=curr_section_name,
                                      paragraphs=temp_text)
                    _article.append(section)
                    # empty paragraph list
                    temp_text.clear()
                    # temp_bib.clear()
                    # store the article into dictionary with its id
                self.__setitem__(id, _article)
                if (id+chunk+1)%chunk == 0:
                    pbar.update(chunk)


class ArticleLookUp:

    def __init__(self):
        self.itoa = dict()
        self.atoi = dict()
        self.current_id = 0

    def __len__(self):
        return self.current_id

    def update(self, paths, type='cord19'):
        id = self.current_id + 1
        for path in paths:
            articles = utils.read_json(path)
            if type=='cord19':
                articles = utils.cord19_challenge_data_formatter(articles)
            for article in articles:
                title = article['title'].lower()
                print
                self.itoa[id] = title
                self.atoi[title] = id
                id += 1

    def id2article(self, id):
        try:
            item = self.itoa[id]
        except KeyError:
            item = -1
        return item

    def article2id(self, article_title):
        try:
            item = self.atoi[article_title]
        except KeyError:
            item = -1
        return item

    def save(self, path):
        with open(path, 'wb') as f:
            dill.dump(self, f)
