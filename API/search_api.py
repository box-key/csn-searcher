from src.network import NetworkSearcher
from src.network import NetworkInterface
from src.siamese_model import SiameseModel
from flask import request, jsonify
import json
import pprint
import datetime
import flask
from flask_cors import CORS

global model, scan, searcher
model = SiameseModel('cpu')
scan = NetworkInterface.create_connection()
searcher = NetworkSearcher(model=model, network=scan)
print("***********SET global DONE*************")

app = flask.Flask(__name__)
cors = CORS(app)

@app.route('/search', methods=['GET'])
def search():
	print("** do search **")
	input = request.args.get('inputText')
	start_time = datetime.datetime.now()
	results = searcher(input, 10)
	search_time = _search_time(start_time)
	print(f"Search took {search_time[0]}.{search_time[1]} secs.\n")
	print(results)
	lists=[]
	for result in results:
		pprint.pprint(result)
		print()
		lists.append(result)
	results = json.dumps(results)
	print(type(results))
	return results;

def _search_time(start_time):
	delta = datetime.datetime.now() - start_time
	return (delta.seconds, delta.microseconds)

if __name__ == "__main__":
	app.run(host='0.0.0.0')
