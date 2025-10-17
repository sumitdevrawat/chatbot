const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message === '') return;

  const userMsg = document.createElement('div');
  userMsg.classList.add('user-message');
  userMsg.textContent = message;
  chatBox.appendChild(userMsg);
  userInput.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.classList.add('bot-message');
    botMsg.textContent = "🤖 Thinking...";
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
      botMsg.textContent = "This is a sample AI reply. (OpenAI API coming soon)";
    }, 1500);
  }, 600);
}

// 🌗 Theme Toggle
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLight = body.classList.contains('light-mode');
  themeToggle.textContent = isLight ? '🌙' : '☀️';
});
