let btnRemove = document.querySelectorAll(".btn-close");

let removeCard = btnRemove.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.target.parentElement.remove();
  });
});
export default removeCard;