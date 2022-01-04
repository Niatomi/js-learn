const headingEvent = document.getElementById("hello");

//Больше инфы на https://developer.mozilla.org/ru/docs/Web/Events
heading.onclick = () => {
  headingEvent.textContent = "хоба";
};

//eventListener - событие слушатель
headingEvent.addEventListener("dblclick", () => {
  if (headingEvent.style.color === "white") {
    headingEvent.style.color = "black";
    headingEvent.style.backgroundColor = "white";
  } else {
    headingEvent.style.color = "white";
    headingEvent.style.backgroundColor = "black";
  }
});

const linkHeading = document.querySelector("a");
linkHeading.addEventListener("mouseover", () => {
  linkHeading.textContent = "ну давай, другалёчек, переходи";
});

//Отмена события
const link = document.querySelector("a");
// link.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("Click on link", event.target.getAttribute("href"));
//   const url = event.target.getAttribute("href");
//   //Изменение url для страницы
//   window.location = event.target.getAttribute("href");
// });
