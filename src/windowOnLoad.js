
import ifLoaded from "./ifLoaded.js";

export default function windowOnLoad() {
  window.onload = function () {
    var loaded = sessionStorage.getItem("loaded");
    if (loaded) {
      ifLoaded();
    } else {
      sessionStorage.setItem("loaded", true);
    }
  };
}
