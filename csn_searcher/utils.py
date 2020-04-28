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
