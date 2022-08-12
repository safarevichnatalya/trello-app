import seveInLocalStorage from "./seveInLocalStorage.js";
import isEmptyFirsItem from "./isEmptyFirsItem.js";
import coutTask from "./coutTask.js";


export default function dragDrop() {
    $("body").on("dragstart", ".todo__item", function () {
      $(this).addClass("over");
    });
    $("body").on("dragend", ".todo__item", function () {
      $(this).removeClass("over");
      seveInLocalStorage();
      isEmptyFirsItem()
      coutTask ()
    });
  
    // drop
    $("body").on("drop", ".todo__list_item", function () {
      seveInLocalStorage();
      isEmptyFirsItem();
    });
  
    $("body").on("dragstart", ".todo__list_item", function () {
      const over = document.querySelector(".over");
  
      const buttonAdd = document.querySelector(".todo__item_add");
      if ($(this).id === "current") {
        $(this).insertAdfter(over, buttonAdd);
      } else {
        $(this).append(over);
      }
    });
  
    $(".todo__list_item").on("dragover", function (e) {
      e.preventDefault();
  
      const over = document.querySelector(".over");
  
      const buttonAdd = document.querySelector(".todo__item_add");
      if ($(this).id === "current") {
        $(this).insertAdfter(over, buttonAdd);
      } else {
        $(this).append(over);
      }
    });
  }