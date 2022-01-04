// const person = {
//     name: "Boris",
//     age: 42,
//     isProgrammer: true,
//     languages: ["ru", "en", "ua"],
//     "complex key": "Complex Value",
//     ["key_" + (1 + 3)]: "Computed Key", // key_4

//     //Метод, так как внутри объекта
//     greet() {
//       console.log("Hello");
//     },
//   };

//Такая форма записи опасна
//Итерирование может заходить к прототипу объекта
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    //Проверяет имеет ли объект свои поля
    console.log("key: ", key);
    console.log("value: ", person[key]);
  }
}

//Ключи можно получить с помощью объекта Object
const keys = Object.keys(person);
keys.forEach((key) => {
  console.log("key: ", key);
  console.log("value", person[key]);
});
