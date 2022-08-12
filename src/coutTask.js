export default function currentTask() {
  let toDo = $(".todo__list_item.first").children().length;
  let toDoSecond = $(".todo__list_item.second").children().length;
  let toDoThird = $(".todo__list_item.third").children().length;

  $("#current .countTask").text(toDo);
  $("#doing .countTask").text(toDoSecond);
  $("#done .countTask").text(toDoThird);
}
