import '../sass/_common.scss';
import { Modal } from 'bootstrap';

const refs = {
  myModal: document.querySelector('#myModal'),
};

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;

var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
  keyboard: false,
});

openModal();

refs.myModal.addEventListener('hide.bs.modal', () => {
  openModal();
});

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS) {
    console.log('Максимальное кол-во надоеданий');
    return;
  }

  setTimeout(() => {
    console.log('Открываем надоедалку');
    myModal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}
