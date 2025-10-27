import $ from "jquery"
//==============
// Scroll Reveal
//==============

function scrollReveal() {
  var revealPoint = 100 // px from bottom
  var revealElement = document.querySelectorAll(".reveal")
  $(".reveal-parent > *").addClass("reveal")
  for (var i = 0; i < revealElement.length; i++) {
    var windowHeight = window.innerHeight
    var revealTop = revealElement[i].getBoundingClientRect().top
    if (revealTop < windowHeight - revealPoint) {
      revealElement[i].classList.add("active")
    } else {
      // remove the this if you want it to animate only once
      revealElement[i].classList.remove("active")
    }
  }
}
window.addEventListener("scroll", scrollReveal)
scrollReveal()
