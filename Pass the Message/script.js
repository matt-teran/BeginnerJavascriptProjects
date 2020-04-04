document.querySelector('#submit').onclick = () => {
    localStorage.setItem('lastMessage', message.value);
}
let message = document.querySelector('#message');
let lastMessage = document.querySelector('#last-message')

lastMessage.innerHTML = localStorage.getItem('lastMessage');