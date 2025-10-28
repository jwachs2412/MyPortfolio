//==============
// Scroll Reveal (Safe + Navbar Friendly)
//==============

function scrollReveal() {
  const revealPoint = 100 // px from bottom
  const revealElements = document.querySelectorAll(".reveal, .reveal-parent > *")

  revealElements.forEach(el => {
    const windowHeight = window.innerHeight
    const revealTop = el.getBoundingClientRect().top

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active")
    } else {
      // remove this if you want it to animate only once
      el.classList.remove("active")
    }
  })
}

// Use a passive scroll listener (non-blocking)
window.addEventListener("scroll", scrollReveal, { passive: true })

// Run once on load
scrollReveal()
