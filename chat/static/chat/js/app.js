const inputButton = document.querySelector("#submit-input");
const username = JSON.parse(document.getElementById("username").textContent);
const roomName = JSON.parse(document.getElementById("room-name").textContent);

const chatSocket = new WebSocket('ws://' + window.location.host + '/ws/chat/' + roomName + "/");

document.querySelector("input").addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    inputButton.click();
  }
});

inputButton.addEventListener('click', function (e) {
  e.preventDefault();
  const messageInputDom = document.querySelector("#input");
  const message = messageInputDom.value;
  chatSocket.send(JSON.stringify({
    message,
    username
  }));
  messageInputDom.value = "";
});

chatSocket.onmessage = function (e) {
  const data = JSON.parse(e.data);
  document.querySelector("#chat-text").value += `${data.username}: ${data.message} \n`;
};