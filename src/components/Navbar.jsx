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
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
      <div className="container flex items-center justify-between">
        <a className="text-xl font-bold text-primary flex items-center" href="#hero">
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Josh Wachsman's </span> Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8 me-8">
          {navItems.map((item, key) => (
            <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav */}

        <button onClick={() => setIsMenuOpen(prev => !prev)} className="md:hidden p-2 text-foreground z-50" aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div className={cn("fixed top-0 left-0 right-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md transition-transform duration-300 md:hidden min-h-[100dvh]", isMenuOpen ? "translate-y-0" : "-translate-y-full")}>
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
  )
}
