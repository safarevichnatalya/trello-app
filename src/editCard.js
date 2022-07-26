import currentBtn from "./saveItem.js";

let todoList = document.querySelector(".todo__list");
let containerBackground = document.querySelector(".container-background");
let modalWindow = document.querySelector(".modal-window");
let input = document.querySelector(".name-task");

let currentNameTask = null;

let editCard = todoList.addEventListener("click", function (event) {
  if (event.target.classList != "btn-edit") {
    return;
  }

  let currentItem = event.target.closest(".todo__item");
  let children = currentItem.childNodes;

  children.forEach((element) => {
    if (element.classList != "todo__name") {
      return;
    }
    currentNameTask = element.textContent;
    input.value = element.textContent;
    inputValue(element);
  });
});

let desc = document.querySelector(".name-descriprion");
let nameTask = document.querySelector(".todo__name");

let currentInput = null;

function inputValue(item) {
  modalWindow.style.display = "flex";
  containerBackground.style.display = "block";
  input.addEventListener("input", function (e) {
    // if (e.target.value.lenght == 1) {
    currentInput = e.target.value;
    e.target.setAttribute("value", e.target.value);
    currentBtn(item, e.target.value, containerBackground, modalWindow);
    // console.log(currentInput.le);
  });
}
// name-descriprion

// let currentName = null;

// function editItem(event) {
//   let currentCard = event.target.parentElement.parentElement.childNodes;
//   currentCard.forEach((element) => {
//     if (element.classList == "todo__name") {
//       input.value = element.textContent;
//       //   console.log(currentName)
//     } else if (element.classList == "todo__desc") {
//       desc.textContent = element.textContent;
//     }
//   });
//   //   console.log(currentCard)

//   //   currentBtn(currentName, currentInput);
//   modalWindow.style.display = "flex";
//   containerBackground.style.display = "flex";

//   input.addEventListener("keypress", function (e) {
//     if (e.target.value.lenght == 0) {
//       return;
//     } else {
//       currentName = e.target.value;
//       e.target.setAttribute("value", currentName);

//       currentBtn(currentCard, currentName);
//     }
//     console.log(e.target);
//   });
//   input.setAttribute("value", currentName);
//   console.log();
//   //   console.log(currentInput);
// }

export { editCard, inputValue };
