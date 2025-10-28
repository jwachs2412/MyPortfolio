import { useEffect } from "react"

export const ScrollReveal = () => {
  useEffect(() => {
    const revealPoint = 100

    const handleScroll = () => {
      const revealElements = document.querySelectorAll(".reveal, .reveal-parent > *")

      revealElements.forEach(el => {
        const windowHeight = window.innerHeight
        const revealTop = el.getBoundingClientRect().top

        if (revealTop < windowHeight - revealPoint) {
          el.classList.add("active")
        } else {
          el.classList.remove("active")
        }
      })
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return null
}
