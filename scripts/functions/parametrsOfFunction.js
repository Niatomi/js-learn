//Параметры по умолчанию
//Если значение не было передано для какого-либо
//параметра, то оно будет задано такое же как
//в сигнатуре функции
const sum = (a = 40, b = 2) => a + b;
console.log(sum(41, 1));

//Переменная all является массивом
function sumAll(...all) {
  const result = 0;
  for (let num of all) {
    result += num;
  }
  return result;
}
