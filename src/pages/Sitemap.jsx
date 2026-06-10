import { ArrowLeft, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import { ThemeToggle } from "../components/ThemeToggle"
import { BlobBackground } from "../components/BlobBackground"
import { Footer } from "../components/Footer"
import { caseStudyProjects } from "../data/caseStudies"
import { useDocumentMeta } from "../hooks/useDocumentMeta"
import { metaForPath } from "../lib/seo"

const sections = [
  { name: "Home", href: "/#hero", description: "Intro and welcome" },
  { name: "About", href: "/#about", description: "My background and what I do" },
  { name: "Skills", href: "/#skills", description: "Technologies and tools I work with" },
  { name: "Projects", href: "/#projects", description: "Featured work and case studies" },
  { name: "Connect", href: "/#connect", description: "Ways to get in touch" }
]

const external = [{ name: "GitHub", href: "https://github.com/jwachs2412", description: "My open-source work and repositories" }]

export const Sitemap = () => {
  useDocumentMeta(metaForPath("/sitemap"))

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <BlobBackground />

      <main className="py-24 px-4 relative">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Site <span className="text-primary">Map</span>
          </h1>

          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">A quick overview of everything on this site. Select any link below to jump straight to that section.</p>

          <h2 className="text-2xl font-semibold mb-6">Sections</h2>
          <ul className="space-y-4 mb-12">
            {sections.map(item => (
              <li key={item.href} className="gradient-border p-5 card-hover">
                <a href={item.href} className="flex flex-col">
                  <span className="text-lg font-medium text-primary">{item.name}</span>
                  <span className="text-sm text-muted-foreground">{item.description}</span>
                </a>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-6">Case Studies</h2>
          <ul className="space-y-4 mb-12">
            {caseStudyProjects.map(project => (
              <li key={project.slug} className="gradient-border p-5 card-hover">
                <Link to={`/projects/${project.slug}`} className="flex flex-col">
                  <span className="text-lg font-medium text-primary">{project.title}</span>
                  <span className="text-sm text-muted-foreground">{project.description}</span>
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-6">Elsewhere</h2>
          <ul className="space-y-4 mb-12">
            {external.map(item => (
              <li key={item.href} className="gradient-border p-5 card-hover">
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex flex-col">
                  <span className="text-lg font-medium text-primary inline-flex items-center gap-2">
                    {item.name} <ExternalLink size={16} />
                  </span>
                  <span className="text-sm text-muted-foreground">{item.description}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <Link to="/" className="primary-button w-fit inline-flex items-center mx-auto gap-2">
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
