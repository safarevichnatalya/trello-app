// // class AddNewItem {
// //   constructor(selector, className) {
// //     this.createElement = document.createElement(selector);
// //     let currentElement = this.createElement;
// //     this.class = currentElement.classList = className;
// //     // this.title = currentElement.textContent = titleTask;
// //   }

// //   createDom(item) {
// //     let itemDom = document.querySelector(`.${item}`);
// //     let parentDiv = itemDom.parentNode;
// //     parentDiv.insertBefore(this.createElement, itemDom);
// //   }
// // }
// // // ".todo__item"

// // class CreateItems extends AddNewItem {
// //   constructor(test) {
// //     super(test.createElement, test.class);
// //   }

// //   createButtonMeth() {
// //     let itemDom = document.querySelector(`.todo__item`);
// //     itemDom.append(this.createElement);
// //   }
// // }

// // class CreateItemsText extends AddNewItem {
// //   constructor(test, titleTask) {
// //     super(test.createElement, test.class);
// //     let currentElement = test.createElement;
// //     this.titlesss = test.titleTask;

// //   }

// //   me() {
// //     // console.log(test.createElement);
// //   }
// // }

// // const titles = new CreateItemsText({
// //   titlesss: "tgttgtgttgt",
// //   createElement: "p",
// //   class: "btn-close",

// // });

// // titles.createButtonMeth();
// // titles.me()
// // modalWindow.style.opacity = "0";
// // modalWindow.style.zIndex = "-2";
// // nameTask.value = "";
// // });
// // console.log(text);

// class CreateItemDom {
//   constructor(selector, className) {
//     this.createElements = document.createElement(`${this.createElements}`);
//     this.className =  className;
//   }

//   createDom(item) {
//     let itemDom = document.querySelector(`.${item}`);
//     let parentDiv = itemDom.parentNode;
//     parentDiv.insertBefore(this.createElement, itemDom);
//   }
// }

// const itemDiv = new CreateItemDom({
//   createElements: 'p',
//   className: "todo__item",
// });
// itemDiv.createDom("todo__item");

// let buttonAdd = document.querySelector(".todo__item_add");
// let modalWindow = document.querySelector(".modal-window");
// let nameTask = document.querySelector(".name-task");

// buttonAdd.addEventListener("click", function (e) {
//   modalWindow.style.opacity = "1";
//   modalWindow.style.zIndex = "2";
// });

// let buttonSave = document.querySelector(".btn-save");
// buttonSave.addEventListener("click", function () {
//   // создание контейнера
//   // const createContainer = new CreateItems({
//   //   createElement: "div",
//   //   class: "todo__item",
//   // });
//   // createContainer.createDom("todo__item");

//   // создание копки
//   // const createButton = new CreateItems({
//   //   createElement: "button",
//   //   class: "btn-close",
//   // });
//   // createButton.createButtonMeth();

//   // const titles = new CreateItemsText({
//   //   createElement: "p",
//   //   class: "btn-close",
//   //   title: "tgttgtgttgt",
//   // });
//   // titles.createButtonMeth();
//   modalWindow.style.opacity = "0";
//   modalWindow.style.zIndex = "-2";
//   nameTask.value = "";
// });
// // создание title
