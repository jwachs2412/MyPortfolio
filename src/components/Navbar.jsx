import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Connect", href: "#connect" }
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
  }, [isMenuOpen])

  // approximate nav height (used to push content down)
  const navHeight = isScrolled ? 72 : 88

  return (
    <>
      <nav
        // adds breathing room + safe area inset
        style={{
          paddingTop: "calc(env(safe-area-inset-top, 0px) + 0.75rem)" // adds ~12px top gap
        }}
        className={cn("fixed top-0 left-0 right-0 z-40 w-full transition-[padding,background,backdrop-filter] duration-300 ease-in-out", isScrolled ? "py-2 bg-background/80 backdrop-blur-md shadow-xs" : "py-4 bg-transparent")}
      >
        <div className="container flex items-center justify-between">
          <a className="text-xl font-bold text-primary flex items-center" href="#hero">
            <span className="relative z-10">
              <span className="text-glow text-foreground"> Josh Wachsman's </span> Portfolio
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8 me-8">
            {navItems.map((item, key) => (
              <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsMenuOpen(prev => !prev)} className="md:hidden p-2 text-foreground z-50" aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile menu */}
          <div
            className={cn("fixed top-0 left-0 right-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md transition-transform duration-300 md:hidden", isMenuOpen ? "translate-y-0" : "-translate-y-full")}
            style={{
              minHeight: "100svh",
              paddingTop: "calc(env(safe-area-inset-top, 0px) + 0.75rem)"
            }}
          >
            <div className="flex flex-col space-y-8 text-xl">
              {navItems.map((item, key) => (
                <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* pushes page content below navbar safely */}
      <div
        style={{
          height: `calc(${navHeight}px + env(safe-area-inset-top, 0px))`
        }}
      />
    </>
  )
}
