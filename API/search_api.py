import json
import pprint
import datetime
import flask
from src.network import NetworkSearcher, NetworkInterface
from src.siamese_model import SiameseModel
from flask import request
from flask_cors import CORS

app = flask.Flask(__name__)
cors = CORS(app)


# csn_search with input txt
# search?inputText=<value>
@app.route('/search', methods=['GET'])
def search():
    input_text = request.args.get('inputText')
    model = SiameseModel('cpu')
    scan = NetworkInterface.create_connection()
    searcher = NetworkSearcher(model=model, network=scan)
    start_time = datetime.datetime.now()
    results = searcher(input_text, 2)
    search_time = _search_time(start_time)
    print(f"Search took {search_time[0]}.{search_time[1]} secs.\n")
    print(results)
    lists = []
    for result in results:
        lists.append(result)
    results = json.dumps(results)
    return results


def _search_time(start_time):
    delta = datetime.datetime.now() - start_time
    return delta.seconds, delta.microseconds


if __name__ == "__main__":
    app.run()
