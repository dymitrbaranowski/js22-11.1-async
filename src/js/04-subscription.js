import '../sass/_common.scss';
import BSN from 'bootstrap.native';

var modalInitJS = new BSN.Modal(myModal, {
  backdrop: 'static',
});

// const modal = new BSN.

// const modal = new BSN.Modal('#subscription-modal');
// console.log(modal);
// const refs = {
//   modal: document.querySelector('#subscription-modal'),
//   subscribeBtn: document.querySelector('button[data-subscribe]'),
// };
// const PROMPT_DELAY = 3000;
// const MAX_PROMPT_ATTEMPTS = 3;
// let promptCounter = 0;

// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('нужно остановить интервал');
//     clearInterval(intervalId);
//     return;
//   }
//   console.log('Подпишись на рассылку! = ' + Date.now());
//   promptCounter += 1;
// }, PROMPT_DELAY);
// const modal = new BSN.Modal('#subscription-modal');
// console.log(modal);

// openModal();

// refs.modal.addEventListener('hide.bs.modal', openModal);
// refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

// function openModal() {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('Максимальное кол-во надоеданий или подписался');
//     return;
//   }

//   setTimeout(() => {
//     console.log('Открываем надоедалку');
//     modal.show();
//     promptCounter += 1;
//   }, PROMPT_DELAY);
// }

// function onSubscribeBtnClick() {
//   hasSubscribed = true;
//   modal.hide();
// }
