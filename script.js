// 🎵 Background Music Player
function playMusic() {
    const player = document.getElementById("audio-player");
    const music = document.getElementById("music-select").value;
    player.src = "music/" + music;
    player.play();
  }
  
  // 🔐 Login System (connected to Flask)
  document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const inputs = this.querySelectorAll("input");
    const payload = {
      username: inputs[0].value,
      password: inputs[1].value
    };
  
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
      })
      .catch(err => console.error("Login error:", err));
  });
  
  // 🎥 Course Check-In
  function playLiveLecture() {
    alert("Connecting you to the live lecture...");
    randomCheckIn("random-checkin");
  }
  
  function watchRecording() {
    alert("Playing recording...");
    randomCheckIn("random-checkin");
  }
  
  function showNotes() {
    alert("Opening notes...");
    randomCheckIn("random-checkin");
  }
  
  // 🎯 Random Check-In Prompt
  function randomCheckIn(containerId) {
    const messages = [
      "How are you feeling right now?",
      "Are you able to focus?",
      "Need a quick break?",
      "Is the pace okay for you?"
    ];
    const random = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById(containerId).innerText = "Check-In: " + random;
  }
  
  // 🧠 Quiz Game
  const quizData = {
    easy: [{ q: "2 + 2 = ?", a: "4" }],
    medium: [{ q: "5 x 3 = ?", a: "15" }],
    hard: [{ q: "√144 = ?", a: "12" }]
  };
  let difficulty = "easy";
  
  function startQuiz() {
    const container = document.getElementById("quiz-container");
    container.innerHTML = "";
    const question = quizData[difficulty][0];
    const input = document.createElement("input");
    input.placeholder = "Answer";
    const button = document.createElement("button");
    button.innerText = "Submit";
    button.onclick = () => {
      if (input.value === question.a) {
        alert("Correct! 🎉");
      } else {
        alert("Oops! Try again.");
      }
      askDifficultyFeedback();
    };
    container.append(`${question.q}`, input, button);
  }
  
  function askDifficultyFeedback() {
    const div = document.getElementById("difficulty-checkin");
    div.innerHTML = `
      <p>Was this level comfortable?</p>
      <button onclick="setDifficulty('easy')">Too Hard</button>
      <button onclick="setDifficulty('medium')">Just Right</button>
      <button onclick="setDifficulty('hard')">Too Easy</button>
    `;
  }
  
  function setDifficulty(level) {
    difficulty = level;
    startQuiz();
  }
  
  window.onload = () => {
    startQuiz(); // Load quiz on start
  };
  
  // 📅 Schedule Mentor Meeting (backend)
  function scheduleMeeting() {
    const payload = { user: "Teen Learner" };
  
    fetch("http://127.0.0.1:5000/schedule-meeting", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        const entry = document.createElement("p");
        entry.innerText = data.message;
        document.getElementById("past-meetings").appendChild(entry);
      })
      .catch(err => console.error("Meeting error:", err));
  }
  
  // 📩 Feedback Submission (backend)
  document.getElementById("feedback-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const feedback = this.querySelector("textarea").value;
  
    fetch("http://127.0.0.1:5000/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: feedback })
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        this.reset();
      })
      .catch(err => console.error("Feedback error:", err));
  });
  