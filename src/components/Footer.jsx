import { ArrowUp } from "lucide-react"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center gap-4">
      <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} JoshWachsman.com, All Rights Reserved</p>
      <div className="flex items-center gap-4">
        <Link to="/sitemap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          Site Map
        </Link>
        <a href="#hero" aria-label="Back to top" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  )
}
