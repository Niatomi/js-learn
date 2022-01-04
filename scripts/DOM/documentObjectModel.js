//Примеры некоторых DOM комманд
const heading = document.getElementById("hello");

console.log(heading.innerHTML);

//style - это весь css
function addStylesTo(node, text, color = "red", fontSize) {
  //Изменение содержимого
  node.textContent = text;
  //Изменение цвета
  node.style.color = color;
  node.style.backgroundColor = "black";
  //Изменение postion данных
  node.style.textAlign = "center";
  node.style.padding = "2rem";
  //falsy: undefined, 0, null, false
  if (fontSize) {
    node.style.fontSize = fontSize;
  }
}

//Получение заголовка без использования id
//Это устаревший метод
// const headingH2 = document.getElementsByTagName("h2")[0];
// console.log(headingH2.innerHTML);

//Тоже устаревший метод
// const headingH2 = document.getElementsByClassName("h2-class");
// console.log(headingH2[0]);

//Как делать нормально
//querySelector(...) позволяет выбрать первый элемент по переданному параметру
//id - #
//class - .
//либо просто тег - h2
const headingH2 = document.querySelector("h2");
// console.log(headingH2);

//Функция для перехода к следующему найденному элементу
const secondHeadingH2 = headingH2.nextElementSibling;
// console.log(secondHeadingH2);

//Собирает все элементы в один псевдо-лист
const listHeadingH2 = document.querySelectorAll("h2");
// console.log(allHeadingH2);
// console.log(listHeadingH2[listHeadingH2.length - 1]);

//Исопльзование фунций вместе с таймАутом
setTimeout(() => {
  addStylesTo(heading, heading.innerText, "white");
}, 1000);

setTimeout(() => {
  addStylesTo(headingH2, headingH2.innerText, "blue");
}, 2000);

setTimeout(() => {
  addStylesTo(link, secondHeadingH2.textContent, "red", "2rem");
}, 3000);
