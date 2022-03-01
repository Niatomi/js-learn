//Функции
//Function Declaration

function greet(name) {
  console.log("Привет ${name}");
}

//Function Expression
const greet2 = function greet2(name) {
  console.log("Привет ${name}");
};

greet("Борис");
greet2("Boris");

//Разница между первым и вторым такая, что мы не можем использовать greet2()
//инициализации, в отличие от простого greet()

console.dir(greet);
//Функции в js являются на самом деле объектами

//Анонимные функции
let counter = 0;
const interval = setInterval(function () {
  if (counter === 5) {
    clearInterval(interval);
  } else {
    console.log(++counter);
  }
}, 1000);
