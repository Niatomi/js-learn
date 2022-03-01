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

//this используется в данном случае для универсальности обращения
//к объекту

const logger = {
  keys() {
    console.log("Object keys: ", Object.keys(this));
  },

  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log(key + " : " + this[key]);
    });
  },

  withParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log("-----Start-----");
    }
    Object.keys(this).forEach((key, index, array) => {
      console.log(key + " : " + this[key]);
      if (between && index != array.length - 1) {
        console.log("----------");
      }
    });
    if (bottom) {
      console.log("-----End-----");
    }
  },
};

//Привязываем контекст person
const bound = logger.keys.bind(person);
bound(); //Выводятся значения ключей person

//Call биндится и сразу же используется
logger.keys.bind(person); //Выводятся значения ключей person
logger.withParams.call(person, false, true);

//Также как и call, но только принимается всего два параметра
//Только второй переменной передаём массив значений
logger.withParams.apply(person, [true, true, true]);
