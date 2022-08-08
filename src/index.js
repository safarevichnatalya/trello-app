//clearing the fields/очищение полей

function clearingInput(item) {
  $(`.${item}`).val(" ");
  $(this).closest(".todo").find(".name-descriprion").val(" ");
  $(this).closest(".todo").find(".input-user-name").val(" ");
  $(this).closest(".todo").find(".input-user-name").val(" ");
}

// clearing variables / очищение переменных
function resetVariables() {
  parentItem = null;
  title = null;
  desc = null;
  nameUser = null;
}

let parentItem = null;
let title = null;
let desc = null;
let nameUser = null;
let dateItem = null;
let priorityText = null;
let textPriority = null;
let classSelectedItem = null;
let todoList = document.querySelector("#current .todo__list_item");
let doingTask = document.querySelector("#doing .todo__list_item");
let doneTask = document.querySelector("#done .todo__list_item");

// drag and drop
function dragDrop() {
  $("body").on("dragstart", ".todo__item", function () {
    $(this).addClass("over");
  });
  $("body").on("dragend", ".todo__item", function () {
    $(this).removeClass("over");
    seveinLocalStorege();
    isEmptyFirsItem()
  });

  // drop
  $("body").on("drop", ".todo__list_item", function () {
    seveinLocalStorege();
    isEmptyFirsItem();
  });

  $("body").on("dragstart", ".todo__list_item", function () {
    const over = document.querySelector(".over");

    const buttonAdd = document.querySelector(".todo__item_add");
    if ($(this).id === "current") {
      $(this).insertAdfter(over, buttonAdd);
    } else {
      $(this).append(over);
    }
  });

  $(".todo__list_item").on("dragover", function (e) {
    e.preventDefault();

    const over = document.querySelector(".over");

    const buttonAdd = document.querySelector(".todo__item_add");
    if ($(this).id === "current") {
      $(this).insertAdfter(over, buttonAdd);
    } else {
      $(this).append(over);
    }
  });
}
dragDrop();

function seveinLocalStorege() {
  localStorage.clear();

  // current
  const currentTodoItem = todoList.innerHTML;
  localStorage.setItem("currentTodo", currentTodoItem);

  const doingTaskItem = doingTask.innerHTML;
  localStorage.setItem("doingTask", doingTaskItem);

  const doneTaskItem = doneTask.innerHTML;
  localStorage.setItem("doneTaskItem", doneTaskItem);
}

function isEmptyFirsItem() {
  if ($(".todo__list_item.first").children().length > 0) {
    $(".todo__inner").css("flex-direction", "column-reverse");
    $(".todo__inner").css("justify-content", " flex-end");

    $('.todo__list_item.first').css('height', 'auto')
  }
  if ($(".todo__list_item.first").children().length == 0) {
    $("#current .todo__inner").css("flex-direction", "column");
    $('.todo__list_item.first').css('height', '100%')
  }
}
isEmptyFirsItem();
function ifLoaded() {
  if ($(".todo__list_item").children()) {
    $(".loader").css("display", "block");
    $(".todo__list_item.first").children(".todo__item").remove();
    $(".todo__list_item.third").children().remove();
    $(".todo__list_item.second").children().remove();
  }
  $(".loader").css("display", "none");

  // console.log($(".todo__list_item.first").length )

  let currentTodoItem = localStorage.getItem("currentTodo");
  let doingTaskItem = localStorage.getItem("doingTask");
  let doneTaskItem = localStorage.getItem("doneTaskItem");

  // if(currentTodoItem){
  //   $('.todo__list_item.first').children('.todo__item').remove()
  // }
  // console.log(typeof currentTodoItem )
  // if(!currentTodoItem || !doingTaskItem || !doneTaskItem ){
  //   return;
  // }

  $(".todo__list_item.first").append(currentTodoItem);

  $(".todo__list_item.second").append(doingTaskItem);

  $(".todo__list_item.third").append(doneTaskItem);
  isEmptyFirsItem();
}

window.onload = function () {
  var loaded = sessionStorage.getItem("loaded");
  if (loaded) {
    ifLoaded();
  } else {
    sessionStorage.setItem("loaded", true);
  }
};

// date/дата
let dateEdit = new Date();

// remove task/удаление таски
$(document.body).on("click", ".btn-close", (e) => {
  e.target.closest(".todo__item").remove();
  seveinLocalStorege();
  isEmptyFirsItem()
});

// edit task
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
  seveinLocalStorege();

  return [parentItem, title, desc, dateItem, priorityText];
});

// saving changes /  сохранение изменений
$(".btn-save").click(function () {
  // let tttt2 = document.querySelector(".todo__list");
  // const html = tttt2.innerHTML;
  // localStorage.setItem("hiDen", html);

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
  seveinLocalStorege();

  // seveinLocalStorege()
  // const html = todoList.innerHTML;
  // localStorage.setItem("todoList", html);
});

let arrayForCategory = [];

// pressing a button: "add category" / нажатие на кнопку: "Добавить категорию"
$(".add-priority").click(function (e) {
  $(".priority").css("display", "block");
});

// category selection / выбор категории
$(".priority__item").click(function (e) {
  textPriority = null;
  $(this).prevAll().removeClass("select");
  $(this).nextAll().removeClass("select");
  $(this).toggleClass("select");

  // write the class and text of the selected category / записываем класс и текст выбранной категории
  textPriority = $(this).text();
  classSelectedItem = $(this).attr("class");
});
let objMarkup = {};
let countCreate = 0;
let createName = null;

// create task / создание таски
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

    // $(".todo__list").insertAdjacentHTML('afterend',itemMarkup);

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
    seveinLocalStorege();

    // clearing the fields
    isEmptyFirsItem();  

    clearingInput("input");
    // seveinLocalStorege()
    // const html = todoList.innerHTML;
    // localStorage.setItem("todoList", html);
  }
});

// text entry in input / ввод текста в input
$(".todo__input").keypress(function () {
  $(this).siblings(".error-text").remove();
  $(this).removeClass("error");
});

// cancel button click / нажатие кнопки cancel
$(".btn-cancel").click(function () {
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
});

function clearingFields() {
  $(".name-task").val(" ");
  $(".name-descriprion").val(" ");
  $(".input-user-name").val(" ");
}

// pressing a button: add new card / нажатие на кнопку: add new card
$(".todo__item_add").click(function () {
  clearingFields();
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

  $(".create-task")
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
});

let countPressEnter = 1;
let countPress;

let counterReset = 0;

// adding labels / добавление labels
$(".input-label").keypress(function (event) {
  if (event.key !== "Enter") {
    return;
  }
  //empty value / пустое значение
  if ($(this).val().length == 0) {
    $(this).addClass("error");
    $(this).siblings(".error-text").text("tst");
    return;
  }
  // removal
  if ($(".todo__flex").children()) {
    let deleteCategory = $(".todo__flex").children("").find(".delete");
    deleteCategory.click(function (e) {
      $(this).parent(".todo__category").remove();
    });
  }
  // category counter / счетчик категорий
  ++countPressEnter;
  if (countPressEnter <= 5) {
    $(this)
      .closest(".todo__edit")
      .find(".todo__flex")
      .append(
        `<p class="todo__category">${$(
          this
        ).val()}<button class="delete"></button></p>`
      );
    $(".input-label").val("");
    counterReset = countPressEnter;
    return counterReset;
  }

  $(".max-label").css("display", "flex");
  $(".max-label").addClass("active");
});

// отследивание изменений
let observer = new MutationObserver((mutations) => {
  for (let mutation of mutations) {
    for (let node of mutation.addedNodes) {
      dragDrop();
    }
  }
});

let observerRow = new MutationObserver((mutations) => {
  //  localStorage.clear()
  for (let mutation of mutations) {
    // seveinLocalStorege()
    // localStorage.clear();
    // // проверим новые узлы
    // const html = todoList.innerHTML;
    // localStorage.setItem("todoList", html);
    // console.log(html);
  }
});

let currentTodo = document.querySelector(".todo__row");

observerRow.observe(currentTodo, {
  childList: true, // наблюдать за непосредственными детьми
  subtree: true, // и более глубокими потомками
  characterDataOldValue: true, // передавать старое значение в колбэк
});

let currentTodoList = document.querySelector(".todo");

// наблюдать за всем, кроме атрибутов
observer.observe(currentTodoList, {
  childList: true, // наблюдать за непосредственными детьми
  subtree: true, // и более глубокими потомками
  characterDataOldValue: true, // передавать старое значение в колбэк
});
