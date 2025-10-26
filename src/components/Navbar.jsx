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

  return (
    <nav
      className={cn(
        // keep it fixed to the top with safe-area support
        "fixed w-full z-50 transition-all duration-300",
        "pt-[calc(env(safe-area-inset-top,0px)+0.75rem)]", // safe top spacing
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5 bg-background/60 backdrop-blur-md"
      )}
      style={{
        top: "0",
        WebkitTransform: "translateZ(0)" // prevents Chrome mobile render glitch
      }}
    >
      <div className="container flex items-center justify-between">
        <a className="text-xl font-bold text-primary flex items-center" href="#hero">
          <span className="relative z-10">
            <span className="text-glow text-foreground">Josh Wachsman's</span> Portfolio
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

        {/* mobile nav button */}
        <button onClick={() => setIsMenuOpen(prev => !prev)} className="md:hidden p-2 text-foreground z-50" aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* mobile nav panel */}
        <div
          className={cn("fixed top-0 left-0 right-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md transition-transform duration-300 md:hidden", isMenuOpen ? "translate-y-0" : "-translate-y-full")}
          style={{
            minHeight: "100svh",
            paddingTop: "calc(env(safe-area-inset-top, 0px) + 1rem)"
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
  )
}
