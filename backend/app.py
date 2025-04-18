from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend JS to talk to Flask from another port

# 📌 Login Route (for demo)
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    # For demo: Accept any credentials
    return jsonify({'status': 'success', 'message': f'Welcome, {username}!'})

# 📌 Feedback Submission
@app.route('/feedback', methods=['POST'])
def feedback():
    data = request.json
    print("Feedback received:", data)
    return jsonify({'status': 'success', 'message': 'Thanks for your feedback!'})

# 📌 Schedule Meeting
@app.route('/schedule-meeting', methods=['POST'])
def schedule_meeting():
    data = request.json
    return jsonify({'status': 'success', 'message': f"Meeting scheduled for {data.get('user')}!"})

if __name__ == '__main__':
    app.run(debug=True)
