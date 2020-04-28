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
            articles.append((id, json_data))
    return articles


def cord19_challenge_data_formatter(articles):
    formatted_articles = []
    for article in articles:
        article_body = dict()
        article_body['title'] = article['metadata']['title']
        sections = []
        # make abstract as a section
        if len(article['abstract']) > 0:
            section_body = dict()
            section_body['section_title'] = 'abstract'
            sections.append([para for para in article['text']])
        # iterate through body of article
        for section in article['body_text']:
            section_body = dict()
            section_body['section_title'] = section['section']
            section_body['text'] = section['text']
            sections.append(section)
        article_body['body_text'] = sections
        formatted_articles.append(article_body)
    return formatted_articles
