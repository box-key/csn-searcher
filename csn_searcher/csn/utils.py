import json
import glob
import os


def read_json(path):
    files = glob.glob(os.path.join(path, '*.json'))
    articles = []
    for id, file in enumerate(files):
        with open(file, 'r') as f:
            data = f.read()
            json_data = json.loads(data)
            articles.append(json_data)
    return articles


def cord19_challenge_data_formatter(articles):
    formatted_articles = []
    for article in articles:
        article_body = {'title': article['metadata']['title']}
        article_body['body_text'] = []
        # make abstract as a section
        if len(article['abstract']) > 0:
            section_body = {'section_title': 'abstract'}
            section_body['text'] = [para['text'] for para in article['abstract']]
            article_body['body_text'].append(section_body)
        # iterate through body of article
        for section in article['body_text']:
            section_body = {'section_title': section['section']}
            section_body['text'] = section['text']
            article_body['body_text'].append(section_body)
        formatted_articles.append(article_body)
    return formatted_articles
