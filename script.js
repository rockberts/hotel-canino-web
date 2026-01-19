const button = document.getElementById("chatbot-button");
const windowChat = document.getElementById("chatbot-window");
const closeBtn = document.getElementById("chatbot-close");

button.onclick = () => {
  windowChat.style.display = "flex";
};

closeBtn.onclick = () => {
  windowChat.style.display = "none";
};
