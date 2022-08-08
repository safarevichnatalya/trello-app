export default function isEmptyFirsItem() {
  if ($(".todo__list_item.first").children().length > 0) {
    $(".todo__inner").css("flex-direction", "column-reverse");
    $(".todo__inner").css("justify-content", " flex-end");

    $(".todo__list_item.first").css("height", "auto");
  }
  if ($(".todo__list_item.first").children().length == 0) {
    $("#current .todo__inner").css("flex-direction", "column");
    $(".todo__list_item.first").css("height", "100%");
  }
}
