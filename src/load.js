import loader from "./loader.js";

export default function load() {
  window.addEventListener("load", () => {
    loader();
  });
}
