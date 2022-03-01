//Также как и в Java

//Константы
console.log(Math.E);
console.log(Math.PI);

//Операции
console.log(Math.sqrt(4)); //2
console.log(Math.pow(5, 3)); //125
console.log(Math.abs(-42)); //42
console.log(Math.max(42, 100, 12, 1, 12, 123)); //123
console.log(Math.min(42, 100, 12, 1, 12, 123)); //1

//Округление
//В меньшую сторону
console.log(Math.floor(4.6)); //4

//В большую сторону
console.log(Math.ceil(4.6)); //5

//Ближайщее целое
console.log(Math.round(4.6)); //5

//Возвращает целую часть числа путём удаления всех дробных знаков
console.log(Math.trunc(4.6)); //4

//Рандом также как в Java
console.log(Math.random());

//Функция - получение рандомного числа в диапозоне
function getRandomBetween(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

console.log(getRandomBetween(10, 42));
