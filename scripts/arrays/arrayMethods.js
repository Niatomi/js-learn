const cars = ["Mazda", "Ford", "BMW", "Toyota"];

//В основе такие же методы как и в Java

//Добавление переменной
cars.push("Suzuki");

//Добавление в начало массива
cars.unshift("Volga");

//Удаление первого элемента/Возвращает первый элемент
//Удаление
cars.shift();
//Возвращение
const firstItem = cars.shift();

//Как shift только наоборот
//Удаление последенего элемента
cars.pop;
//Возвращение первого элемента
const lastItem = cars.pop();

//Переворачивание массива
cars.reverse();

const people = [
  { name: "Boris", budget: 3500 },
  { name: "Slava", budget: 4000 },
  { name: "Victoria", budget: 5000 },
];
const index = people.findIndex(function (person) {
  return person.budget === 3500;
});
console.log(people[index]);
