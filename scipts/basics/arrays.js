//Массивы

//Такая наиболее приемлема
//Вне зависимости от const мы можем менять переменные массива
const cars = ["BMW", "Mazda", "LandRover"];
console.log(cars);

const carsExample = new Array("LandRover", "BMW");

//length такой же как в Java
console.log(cars.length);

//Запись последним элементом
cars[cars.length] = "Toyota";
