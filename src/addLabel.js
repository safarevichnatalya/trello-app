let countPressEnter = 1;
let counterReset = 0;

export default function addLabel() {
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
}
