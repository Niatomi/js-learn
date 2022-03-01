//Объекты
const person = {
  firstName: "Oleg",
  lastName: "Borisov",
  year: 2000,
  languages: ["Ru", "En", "Ua"],
  hasWife: false,
  greet: function () {
    console.log("greet");
  },
};

console.log(person.firstName);
person.greet;

//К объекту можно обращаться как к массиву
const key = "year";
console.log(person[key]); //2000
