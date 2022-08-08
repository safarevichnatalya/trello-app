import seveInLocalStorage from "./seveInLocalStorage.js";
import isEmptyFirsItem from "./isEmptyFirsItem.js";
import clearingInput from "./clearingInput.js";

let parentItem = null;
let title = null;
let desc = null;
let nameUser = null;
let dateItem = null;
let priorityText = null;
let textPriority = null;
let classSelectedItem = null;

let arrayForCategory = [];

let objMarkup = {};
let countCreate = 0;

// date/дата
let dateEdit = new Date();

// edit task
function editTask() {
  $("body").on("click", ".btn-edit", function () {
    // write to a variable/ значения - в переменные
    parentItem = $(this).closest(".todo__item");
    title = parentItem.children(".todo__name");
    desc = parentItem.children(".todo__desc");
    nameUser = parentItem.find(".name-user");
    dateItem = parentItem.find(".date-edit");
    priorityText = parentItem.find(".priority__item");

    $(".container-background")
      .animate(
        {
          zIndex: 1,
        },
        1
      )
      .animate(
        {
          opacity: 0.5,
        },
        100
      );

    // priority check/проверка приоритета
    let buttonPriority = document.querySelectorAll(
      ".modal-window .priority__item"
    );

    buttonPriority.forEach((item) => {
      item.classList.remove("select");
      if (
        priorityText.text().replace(/ +/g, " ").trim() ==
        item.textContent.replace(/ +/g, " ").trim()
      ) {
        item.classList.add("select");
      }
    });

    // assigning values ​​to the selected task/ присваеваем значения, выбранной таски
    $(".name-task").val(title.text().replace(/ +/g, " ").trim());
    $(".name-descriprion").val(desc.text().replace(/ +/g, " ").trim());
    $(".input-user-name").val(nameUser.text().replace(/ +/g, " ").trim());
    $(".modal-window")
      .animate(
        {
          zIndex: 2,
        },
        1
      )
      .animate(
        {
          opacity: 1,
        },
        100
      );
    $("html").css("overflow-y", "hidden");
    seveInLocalStorage();

    return [parentItem, title, desc, dateItem, priorityText];
  });
}
// saving changes /  сохранение изменений
function saveTask() {
  $(".btn-save").click(function () {
    // edit date / дата редактирования
    if (textPriority !== null) {
      priorityText.attr("class", classSelectedItem);
      priorityText.text(textPriority);
    }

    let time = dateEdit.getHours() + ":" + dateEdit.getMinutes();
    let date = dateEdit.getDate() + "." + `${dateEdit.getMonth() + 1}`;
    dateItem.text(`Edited ${date} in ${time}.`);

    // close modal window / закрытие модального окна
    $("html").css("overflow-y", "scroll");
    $(".container-background")
      .animate(
        {
          opacity: 0,
        },
        100
      )
      .animate(
        {
          zIndex: -1,
        },
        1
      );
    $(".modal-window")
      .animate(
        {
          opacity: 0,
        },
        100
      )
      .animate(
        {
          zIndex: -1,
        },
        1
      );

    // writing changes to the DOM / записываем изменения в DOM
    let editNameTask = $(".name-task").val();
    title.text(editNameTask);
    let editDescTask = $(".name-descriprion").val();
    desc.text(editDescTask);
    let userTask = $(".input-user-name").val();
    nameUser.text(userTask);

    classSelectedItem = null;
    seveInLocalStorage();
  });
}
// create task / создание таски
function createTask() {
  $(".btn-create").click(function () {
    let itemMarkup;
    let count = ++countCreate;
    let category = document.querySelectorAll(".todo__category");
    let emptyField = true;
    let allInput = $(this).closest(".todo").find(".input");

    // put all input into an array / помещаем все input в массив
    let arrayItem = [];
    allInput.each(function (index, item) {
      arrayItem.push(item);
    });

    // checking for empty fields / проверка на пустые поля
    emptyField = arrayItem.some(function (item) {
      if (item.value.length == 1) {
        item.classList.add("error");
        return true;
      } else {
        return false;
      }
    });

    // create task / создание таски
    if (!emptyField) {
      category.forEach((item) => {
        arrayForCategory.push(item.textContent);
      });

      let categoryText = arrayForCategory.map((value) => {
        let markup = `<p class ="todo__category"> ${value} </p>`;
        return markup;
      });
      let date = dateEdit.getDate() + "." + "0" + (+dateEdit.getMonth() + 1);

      itemMarkup = `<div class="todo__item" data-id = "${count}" draggable="true">
        <button class="btn-close"></button>
        <p class="${classSelectedItem}">
        ${textPriority}
        </p>
        <p class="todo__name">${$(this)
          .closest(".todo")
          .find(".name-task")
          .val()}</p>
        <p class="todo__info">
          <span class="date">${date}</span>
          <span>
            Created by
            <span class="name-user">
            ${$(this).closest(".todo").find(".input-user-name").val()}
            </span>
          </span>
        </p>
        <p class="date-edit"></p>
        <p class="todo__desc">
        ${$(this).closest(".todo").find(".name-descriprion").val()}
        </p>
        <p></p>
      <div class ="todo__flex">
      ${categoryText.join(" ")}</div>
        <div class="todo__footer">
          <div class="todo__users">
            <div class="todo__user todo__user_first"></div>
            <div class="todo__user todo__user_second"></div>
          </div>
          <button class="btn-edit"></button>
        </div>
      </div>
      `;
      // count how many tasks were created and add to the object / считаем сколько было создано task и добавляем в объект
      objMarkup[count] = itemMarkup;

      // insert element into DOМ / вставляем элемент в DOМ
      let todoList = document.querySelector(".todo__list");
      todoList.insertAdjacentHTML("beforeend", itemMarkup);

      // hide modal window / скрытие модального окна
      $(".container-background")
        .animate(
          {
            opacity: 0,
          },
          100
        )
        .animate(
          {
            zIndex: -1,
          },
          1
        );
      $(".create-task")
        .animate(
          {
            opacity: 0,
          },
          100
        )
        .animate(
          {
            zIndex: -1,
          },
          1
        );
      $("html").css("overflow-y", "scroll");
      seveInLocalStorage();
      isEmptyFirsItem();
      clearingInput("input");
    }
  });
}

// category selection / выбор категории

function selectCategory() {
  $(".priority__item").click(function (e) {
    textPriority = null;
    $(this).prevAll().removeClass("select");
    $(this).nextAll().removeClass("select");
    $(this).toggleClass("select");

    // write the class and text of the selected category / записываем класс и текст выбранной категории
    textPriority = $(this).text();
    classSelectedItem = $(this).attr("class");
  });
}

export default function action() {
  editTask(), saveTask(), createTask(), selectCategory();
}

