

window.onscroll=()=>{
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#navlinks").addClass("font-link-shrink");
        $("#navlinks").removeClass("font-link");
        $("#brand").addClass("font-shrink");
        $("#brand").removeClass("font");
      } else {
        $("#navlinks").addClass("font-link");
        $("#navlinks").removeClass("font-link-shrink");
        $("#brand").addClass("font");
        $("#brand").removeClass("font-shrink");
      }
}