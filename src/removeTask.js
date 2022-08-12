import seveInLocalStorage from "./seveInLocalStorage.js";
import isEmptyFirsItem from "./isEmptyFirsItem.js";
import coutTask from "./coutTask.js";




export default function removeTask() {
  $(document.body).on("click", ".btn-close", (e) => {
    e.target.closest(".todo__item").remove();
    seveInLocalStorage();
    isEmptyFirsItem();
    coutTask()
  });
}
