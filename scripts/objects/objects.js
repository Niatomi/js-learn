//Обычное создание объекта
const person = {
  name: "Boris",
  age: 42,
  isProgrammer: true,
  languages: ["ru", "en", "ua"],
  "complex key": "Complex Value",
  ["key_" + (1 + 3)]: "Computed Key", // key_4

  //Метод, так как внутри объекта
  greet() {
    console.log("Hello");
  },

  info() {
    console.log("Info about ", this.name);
  },
};

//Обращние к полям
console.log(persone.name);
console.log(persone["age"]);
console.log(persone["complex key"]);
person.greet();

person.age++;
person.languages.push("de");
person["key_4"] = undefined;

//Удаление полей в объекте
delete person["key_4"];

//Декстуктуризация

//1
// const nameDes = person.name;
// const ageDes = person.age;
// const languagesDes = person.languages;

//2
const { name: nameDes, age, languages } = person;

//Формы записи 1 и 2 являются одним и тем же
