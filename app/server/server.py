# server.py
from flask import Flask, render_template
import random

app = Flask(__name__, static_folder="../dist", template_folder="../client")

@app.route("/")
def index():
    return render_template("index.html")

def get_random_movie():
  movie_list = ['Avengers', 'Jessica\'s body', 'Definitely Maybe']
  return random.choice(movie_list)

@app.route("/random")
def random_movie():
  return get_random_movie()

if __name__ == "__main__":
    app.run(debug=True)