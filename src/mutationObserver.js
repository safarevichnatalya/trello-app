import dragDrop from './dragDrop.js';
// import mobileAction from "./mobileAction.js";

export default function observer (){
  
let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        dragDrop();
        // mobileAction()
      }
    }
  });
  
  let currentTodoList = document.querySelector(".todo");
  
  // наблюдать за всем, кроме атрибутов
  observer.observe(currentTodoList, {
    childList: true, // наблюдать за непосредственными детьми
    subtree: true, // и более глубокими потомками
    characterDataOldValue: true, // передавать старое значение в колбэк
  });
}