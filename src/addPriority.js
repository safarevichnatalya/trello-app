// pressing a button: "add category" / нажатие на кнопку: "Добавить категорию"

export default function addPriority() {
  $(".add-priority").click(function (e) {
    $(".priority").toggleClass('active');
  });
}
