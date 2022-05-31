import { Message } from './components/Message';

const formMessage = document.querySelector('.sendMessage');
const sendBtn = document.querySelector('.sendBtn');
const chat = document.querySelector('ul');

sendBtn.addEventListener('click', e => {
  e.preventDefault();
  createMessage();
});

const contact = formMessage.firstInput.value;
const message = formMessage.secondInput.value;

function createMessage(contact, message) {
  Message.nome = contact;
  Message.conteudo = message;
  <Message nome="" conteudo="" />;
  //chat.appendChild(Message);
  console.log(Message.nome);
}
