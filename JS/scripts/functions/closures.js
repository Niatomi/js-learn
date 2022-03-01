//Замыкания
function createMember(name) {
  return function (lastName) {
    console.log(name + lastName);
  };
}

//Создаётся функция, где в name изначально передаётся имя
//При дальнейшем вызове переменной logWithLastName передаётся значение
//В реализацию функции для lastName
const logWithlastName = createMember("Boris");
console.log(logWithlastName("Minin"));
