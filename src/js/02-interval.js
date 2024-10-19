import '../sass/_example.scss';

/*
 * Метод setInterval(callback, delay, args)
 */

// const logger = time => console.log(`Лог каждые ${time}ms - ${Date.now()}`);

console.log('До вызова setTimeout');
setTimeout(() => {
  console.log('вызов отложенной функции 1000');
}, 1000);
setTimeout(() => {
  console.log('вызов отложенной функции 2000');
}, 2000);
console.log('после вызова setTimeout');
console.log('после вызова setTimeout');
