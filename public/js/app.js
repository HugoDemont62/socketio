const socket = io();

const input = document.querySelector('input');
const message = document.querySelector('#message');
const list = document.querySelector('#list');
const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  socket.emit('chat message', input.value);
  input.value = '';
});

socket.on('chat message', (msg) => {
  console.log(msg);
  const li = document.createElement('li');
  li.textContent = msg;
  list.appendChild(li);
});