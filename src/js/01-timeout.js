import '../sass/_example.scss';

// console.log('До вызова setTimeout');

// setTimeout(() => {
//   console.log('1-Внутри для setTimeout');
// }, 2000);

// setTimeout(() => {
//   console.log('2-Внутри для setTimeout');
// }, 3000);

// console.log('После вызова setTimeout');

const logger = time => console.log(`Лог каждые ${time}ms -${Date.now()}`);

// console.log('До вызова setInterval');
// setInterval(logger, 2000, 2000);
// console.log('после вызова setInterval');

const intervalId = setInterval(logger, 2000, 2000);

// const timerId = setTimeout(logger, 2000, 2000);
// console.log(timerId);

const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer);

if (shouldCancelTimer) {
  clearInterval(intervalId);
}
