let btns = document.querySelector(".todo__btns");
// let input = document.querySelector(".name-task");

function currentBtn(item, newValueName, containerBackground, modalWindow) {
  btns.addEventListener("click", function (e) {
    if (e.target.classList == "btn-save") {
      item.textContent = newValueName;
      containerBackground.style.display = "none";
      modalWindow.style.display = "none";
      console.log(item.lenght)
    }
  });
}
export default currentBtn;
