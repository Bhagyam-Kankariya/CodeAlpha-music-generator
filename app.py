
from flask import Flask, render_template, request, jsonify
import random

app = Flask(__name__)

notes_map = {
    "happy": ["C4","E4","G4","B4"],
    "sad": ["A3","C4","E4"],
    "chill": ["D4","F4","A4"]
}

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/generate", methods=["POST"])
def generate():
    mood = request.json.get("mood","happy")
    notes = notes_map[mood]
    melody = [random.choice(notes) for _ in range(16)]
    return jsonify(melody)

if __name__ == "__main__":
    app.run(debug=True)
