// удаление заметки
$(".btn-close").click(function (e) {
  $(this).closest(".todo__item").remove();
});

function resetVariables() {
  parentItem = null;
  title = null;
  desc = null;
}
let parentItem = null;
let title = null;
let desc = null;
let nameUser = null;

// открытия модального окна
$(".btn-edit").click(function (e) {
  //   записываем переменные
  parentItem = $(this).closest(".todo__item");
  title = parentItem.children(".todo__name");
  desc = parentItem.children(".todo__desc");
  nameUser = parentItem.find(".name-user");
  // console.log(nameUser)
  $(".container-background")
    .animate({ zIndex: 1 }, 1)
    .animate({ opacity: 0.5 }, 100);

  // Присваеваем значения выбранного жлемента в input и texarea
  $(".name-task").val(title.text());
  $(".name-descriprion").val(desc.text());
  $(".input-user-name").val(nameUser.text());
  $(".modal-window").animate({ zIndex: 2 }, 1).animate({ opacity: 1 }, 100);
  $("html").css("overflow-y", "hidden");

  return [parentItem, title, desc];
});

// редактирование заметки
$(".btn-save").click(function () {
//   if($(this).closest('.todo').find('input').val().length  === 0){
//     let test = $(this).closest('.todo').find('input').val().length  === 0;
//   let classs =  test.addClass('as');
// console.log(classs);
// return
//   }
 
  if ($(".name-task").val().length  === 0) {
    let error = `<span class="error-text">Пожалуйста введите свое имя</span>`;
    $(".name-task").addClass("error");
    $(".name-task").closest(".todo__edit").append(error);
    // return;
  } if ($(".name-descriprion").val().length  === 0) {

    let error = `<span class="error-text">Пожалуйста введите описание</span>`;
    $(".name-descriprion").addClass("error");
    $(".name-descriprion").closest(".todo__edit").append(error);
    // return;
  }
  console.log($(".name-descriprion").val().length)
  $("html").css("overflow-y", "scroll");
  $(".container-background")
    .animate({ opacity: 0 }, 100)
    .animate({ zIndex: -1 }, 1);
  $(".modal-window").animate({ opacity: 0 }, 100).animate({ zIndex: -1 }, 1);

  let editNameTask = $(".name-task").val();
  title.text(editNameTask);
  let editDescTask = $(".name-descriprion").val();
  desc.text(editDescTask);
  $(".name-task").val(" ");
  $(".name-descriprion").val("");
});

// нажатие на кнопки
$(".name-task").keypress(function () {
  $(".name-task").siblings(".error-text").remove();
  $(this).removeClass("error");
});

// кнопка cancel

$(".btn-cancel").click(function () {
  $("html").css("overflow-y", "scroll");
  $(".container-background")
    .animate({ opacity: 0 }, 100)
    .animate({ zIndex: -1 }, 1);
  $(".modal-window").animate({ opacity: 0 }, 100).animate({ zIndex: -1 }, 1);
});
let today = new Date();
// let strDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
console.log(today.getDate());
console.log(today.getMinutes());
