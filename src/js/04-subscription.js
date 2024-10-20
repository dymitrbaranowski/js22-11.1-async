import '../sass/_common.scss';

console.log(bootstrap);
const refs = {
  myModal: document.querySelector('#myModal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
};

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribe = false;

var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
  keyboard: false,
});

openModal();

refs.myModal.addEventListener('hide.bs.modal', openModal);
refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribe) {
    console.log('Максимальное кол-во надоеданий или подписался');
    return;
  }

  setTimeout(() => {
    console.log('Открываем надоедалку');
    myModal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}

function onSubscribeBtnClick() {
  hasSubscribe = true;
  myModal.hide();
}
