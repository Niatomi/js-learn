const stringInt = "42";
const stringFloat = "42.42";

console.log(Number.parseInt(stringInt) + 2);
console.log(parseInt(stringInt) + 2);
console.log(Number(stringInt) + 2);
console.log(+stringInt + 2);

console.log(parseFloat(stringFloat) + 2);
console.log(+stringFloat + 2);
//Точно также как и в первом варианте с интом можно парсить числа
