export default function clearingInput(item) {
  $(`.${item}`).val(" ");
  $(this).closest(".todo").find(".name-descriprion").val(" ");
  $(this).closest(".todo").find(".input-user-name").val(" ");
  $(this).closest(".todo").find(".input-user-name").val(" ");
}