import ifLoaded from "./ifLoaded.js";

export default function windowOnLoad() {
  window.onload = function () {
    var loaded = sessionStorage.getItem("loaded");
    if (loaded) {


       if (localStorage.getItem("preview") === "true") {

        $(".preview").remove();
        ifLoaded();

        return;
      }

     
    } else {
      $("html").css('overflow-y', 'hidden')
      setTimeout(() => {
        
        $(".preview").animate({ opacity: 0 }, 300)
        .animate({ zIndex: -1 }, 1);

        localStorage.setItem("preview", true);
        $("html").css('overflow-y', 'scroll')
// 
      }, 4000);

      // $(".preview").remove();
      sessionStorage.setItem("loaded", true);
    }
  };
}
