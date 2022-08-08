import clearingFields from "./clearingFields.js"

export default function buttonAddNewCard() {
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
}
