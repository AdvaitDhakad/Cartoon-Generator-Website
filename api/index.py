from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
import json
from image import gen_image_free

app = Flask(__name__)
CORS(app)
parser = reqparse.RequestParser()
parser.add_argument('task')

@app.route("/api", methods=["GET"])
def api_call():
    return {"status": "success", "message": "Integrate Flask Framework with Next.js"}

@app.route("/api/prompt", methods=["GET", "POST"])
def gen_image():
    args = parser.parse_args()
    body = request.json
    body = dict(body)
    data = json.loads(gen_image_free(body['Prompt']).content)
    urls = [item['image']['source']['url'] for item in data['data']]
    urls_dict = {i+1: urls[i] for i in range(len(urls))}
    return urls_dict


@app.route("/api/generate", methods=["GET", "POST"])
def generate():
    args = parser.parse_args()
    body = request.json
    body = dict(body)
    return body

if __name__ == "__main__":
    app.run()