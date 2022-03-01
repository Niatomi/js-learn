const carsForEditing = ["Mazda", "Ford", "BMW", "Toyota"];

//Каждый элемент в верхнем регистре
//map возвращает новый массив
const upperCars = cars.map((car) => {
  return car.toUpperCase();
});

const firstLetterIsNotM = carsForEditing.filter((value) => {
  return value.charAt(0) !== "M";
});

console.log(firstLetterIsNotM); //"Ford", "BMW", "Toyota"
