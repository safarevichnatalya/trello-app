// text entry in input / ввод текста в input

export default function keyPressInput(){
$(".todo__input").keypress(function () {
    $(this).siblings(".error-text").remove();
    $(this).removeClass("error");
  });
}
