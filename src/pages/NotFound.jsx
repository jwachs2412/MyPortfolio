import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { ThemeToggle } from "../components/ThemeToggle"
import { BlobBackground } from "../components/BlobBackground"
import { Footer } from "../components/Footer"
import { useDocumentMeta } from "../hooks/useDocumentMeta"

export const NotFound = () => {
  useDocumentMeta({
    title: "Page Not Found | Josh Wachsman",
    description: "The page you're looking for doesn't exist. Head back to the homepage to browse Josh Wachsman's portfolio."
  })

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <BlobBackground />

      <main className="py-24 px-4 relative">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary mb-4">404</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Page <span className="text-primary">Not Found</span>
          </h1>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            The page you're looking for doesn't exist or has been moved. Head back to the homepage to explore my work, skills, and ways to get in touch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/" className="primary-button w-fit inline-flex items-center gap-2">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <Link to="/sitemap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Or browse the site map
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
