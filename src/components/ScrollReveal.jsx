import { useEffect } from "react"

export const ScrollReveal = () => {
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

  useEffect(() => {}, [window.addEventListener("scroll", scrollReveal, { passive: true })])

  return null
}
