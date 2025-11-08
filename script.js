const calendar = document.getElementById("calendar");
const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

function generateCalendar() {
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement("div");
    day.className = "day";
    if (i < currentDay) day.classList.add("past");
    day.textContent = i;
    calendar.appendChild(day);
  }
}

generateCalendar();

// Settings
document.getElementById("bgColor").addEventListener("input", (e) => {
  document.body.style.backgroundColor = e.target.value;
});

document.getElementById("textColor").addEventListener("input", (e) => {
  document.body.style.color = e.target.value;
});

// Chatbot
const lillyBtn = document.getElementById("lillyBtn");
const chatContainer = document.getElementById("chatContainer");
const chatBox = document.getElementById("chatBox");

lillyBtn.addEventListener("click", () => {
  chatContainer.classList.toggle("hidden");
  addMessage("Lilly", "Hi! I'm Lilly, your friendly calendar buddy 😊");
});

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (message) {
    addMessage("You", message);
    respondToUser(message);
    input.value = "";
  }
}

function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function respondToUser(message) {
  let response = "I'm not sure how to respond to that.";
  if (message.toLowerCase().includes("hello")) {
    response = "Hello there! How can I help you today?";
  } else if (message.toLowerCase().includes("date")) {
    response = `Today is ${today.toDateString()}.`;
  } else if (message.toLowerCase().includes("thank")) {
    response = "You're welcome! 😊";
  }
  setTimeout(() => addMessage("Lilly", response), 500);
}
