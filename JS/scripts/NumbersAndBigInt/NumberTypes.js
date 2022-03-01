//Инициализация обычный переменных
const int_num = 42;
const float_num = 42.42;
const pow_num = 10e3; //10^3

console.log("MAX_SAFE_INTEGER", Number.MAX_SAFE_INTEGER);
console.log("MIN_SAFE_INTEGER", Number.MIN_SAFE_INTEGER);

console.log("MAX_VALUE", Number.MAX_VALUE);
console.log("MIN_VALUE", Number.MIN_VALUE);

console.log("POSITIVE_INFINITY", Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY", Number.NEGATIVE_INFINITY);

console.log(Number.NaN); //Not a Number

console.log(Number.isNaN(2 / undefined)); //Да, число NaN
console.log(Number.isFinite(2 / 0)); //Да, бесконечность
