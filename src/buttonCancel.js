// cancel button click / нажатие кнопки cancel
export default function buttonCancel() {
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
}
