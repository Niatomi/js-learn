const stringExample = "Проверка";

//Ну тут и так понятно
console.log(stringExample.length);

//Capitalize of all chars
console.log(stringExample.toUpperCase());

//Lowercase of all
console.log(stringExample.toLowerCase());

//Char at pos
console.log(stringExample.charAt(2));

//Проверка на наличие части строки
//При выводе -1 такой строки нет
console.log(stringExample.indexOf("вер")); // 3

//Начинаетcя ли строка с переданной строки
console.log(stringExample.startsWith("Пр")); //true

//Заканчивается ли строка с переданной строки
console.log(stringExample.startsWith("ка")); //true

//Повторение строки
console.log(stringExample.repeat(3));

const untrimmedString = "            password      ";
untrimmedString.trim();
console.log(untrimmedString); //password
//Также существуют разновидности trim

function logPerson(s, name, age) {
  return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}

const examplePersonName = "Boris";
const exampleAge = 24;

stringExample = logPerson`Имя: ${examplePersonName}, Возраст: ${exampleAge}`;
