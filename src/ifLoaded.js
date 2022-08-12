import isEmptyFirsItem from "./isEmptyFirsItem.js";
import coutTask from "./coutTask.js";

export default function ifLoaded() {

    if ($(".todo__list_item").children()) {
      $(".loader").css("display", "block");
      $(".todo__list_item.first").children(".todo__item").remove();
      $(".todo__list_item.third").children().remove();
      $(".todo__list_item.second").children().remove();
    }
    $(".loader").css("display", "none");
  
    let currentTodoItem = localStorage.getItem("currentTodo");
    let doingTaskItem = localStorage.getItem("doingTask");
    let doneTaskItem = localStorage.getItem("doneTaskItem");
  
    $(".todo__list_item.first").append(currentTodoItem);
    $(".todo__list_item.second").append(doingTaskItem);
    $(".todo__list_item.third").append(doneTaskItem);
    coutTask()  
    isEmptyFirsItem();
  }
  