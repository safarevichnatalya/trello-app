let todoList = document.querySelector("#current .todo__list_item");
let doingTask = document.querySelector("#doing .todo__list_item");
let doneTask = document.querySelector("#done .todo__list_item");

export default function seveInLocalStorage() {
    // localStorage.clear();
  
    // current
    const currentTodoItem = todoList.innerHTML;
    localStorage.setItem("currentTodo", currentTodoItem);
  
    const doingTaskItem = doingTask.innerHTML;
    localStorage.setItem("doingTask", doingTaskItem);
  
    const doneTaskItem = doneTask.innerHTML;
    localStorage.setItem("doneTaskItem", doneTaskItem);
  }