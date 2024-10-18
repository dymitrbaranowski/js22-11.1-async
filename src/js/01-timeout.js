import '../sass/_example.scss';

// console.log('До вызова setTimeout');

// setTimeout(() => {
//   console.log('1-Внутри для setTimeout');
// }, 2000);

// setTimeout(() => {
//   console.log('2-Внутри для setTimeout');
// }, 3000);

// console.log('После вызова setTimeout');

const logger = time => {
  console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
};

setTimeout(logger, 2000, 2000);
