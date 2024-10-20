import '../sass/_common.scss';

/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/

const date1 = Date.now();
console.log('data1', date1);

setTimeout(() => {
  const date2 = Date.now();

  console.log('data1', date1);
  console.log('data2', date2);

  console.log(date2 - date1);
}, 3000);
