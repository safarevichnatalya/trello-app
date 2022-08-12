function closeWindow(currentElem, closestElem) {
  $("body").on("click", `.${currentElem}`, function (e) {
    if (e.target.closest(`.${closestElem}`)) {
      return;
    }
    $(this).animate({ opacity: 0 }, 100).animate({ zIndex: -1 }, 1);
    $(".container-background")
      .animate({ opacity: 0 }, 100)
      .animate({ zIndex: -1 }, 1);
  });
}

export default function closeModalWindow() {
  closeWindow("create-task", "create-task__container");
  closeWindow("modal-window", "modal-window__container");

  $(document).on("keydown", function (event) {
    if (event.key == "Escape") {
      $(".modal-window")
        .animate({ opacity: 0 }, 100)
        .animate({ zIndex: -1 }, 1);

      $(".create-task").animate({ opacity: 0 }, 100).animate({ zIndex: -1 }, 1);
      $(".container-background")
        .animate({ opacity: 0 }, 100)
        .animate({ zIndex: -1 }, 1);
    }
  });

  
}
