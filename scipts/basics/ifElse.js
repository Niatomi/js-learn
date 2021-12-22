//If Else
//Такая же структура как и в Java
//"MDN expressions and operators" for more details

//Сравнеие разных типов данных
const num1 = 42;
const num2 = "42";

console.log(num1 == num2); //True

//Для проверки с учётом типа данных исопльзуется ===
//Лучше всего использовать именно такой вариант сравнения
console.log(num1 === num2); //False

//Тирнарные выражения
//Используется для простых выражений
const isReady = true;
isReady ? console.log("Всё готово!") : console.log("Всё не готово!");

//Оператор отрицания - !
//Приминение данного оператора не ограничено по колличество вызвов
const booleanExample = !true; //false
booleanExample = !booleanExample; //true
booleanExample = !!booleanExample; //true
