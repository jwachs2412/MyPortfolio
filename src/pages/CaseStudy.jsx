import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { ThemeToggle } from "../components/ThemeToggle"
import { BlobBackground } from "../components/BlobBackground"
import { Footer } from "../components/Footer"
import { getProjectBySlug } from "../data/caseStudies"
import { useDocumentMeta } from "../hooks/useDocumentMeta"
import { NotFound } from "./NotFound"

const ORIGIN = "https://www.joshwachsman.com"

// Inject a CreativeWork JSON-LD block while the case-study page is mounted,
// then remove it on unmount so other routes don't inherit project metadata.
const useCaseStudyJsonLd = project => {
  useEffect(() => {
    if (!project) return
    const data = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: `${project.title} — Case Study`,
      url: `${ORIGIN}/projects/${project.slug}`,
      image: `${ORIGIN}${project.image}`,
      description: project.description,
      author: { "@id": `${ORIGIN}/#person` },
      keywords: project.tags.join(", ")
    }
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.dataset.casestudy = project.slug
    script.text = JSON.stringify(data)
    document.head.appendChild(script)
    return () => {
      script.remove()
    }
  }, [project])
}

const Placeholder = ({ children }) => <p className="text-sm text-muted-foreground italic">{children}</p>

export const CaseStudy = () => {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  const overview = project?.caseStudy?.overview
  useDocumentMeta({
    title: project ? `${project.title} — Case Study | Josh Wachsman` : undefined,
    description: project ? overview || `Case study: ${project.title}. ${project.description} Built with ${project.tags.join(", ")}.` : undefined
  })

  useCaseStudyJsonLd(project)

  if (!project) return <NotFound />

  const cs = project.caseStudy || {}
  const hasOverview = Boolean(cs.overview)
  const hasChallenges = cs.challenges && cs.challenges.length > 0
  const hasSolutions = cs.solutions && cs.solutions.length > 0
  const hasMetrics = cs.metrics && cs.metrics.length > 0
  const hasLessons = Boolean(cs.lessons)

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <BlobBackground />

      <main className="py-24 px-4 relative">
        <article className="container mx-auto max-w-3xl">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {project.title} <span className="text-primary">Case Study</span>
            </h1>
            <p className="text-muted-foreground mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-2 py-1 text-xs font-medium bg-primary/30 rounded-full text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>

            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="primary-button w-fit inline-flex items-center gap-2" aria-label={`Visit ${project.title} (opens in a new tab)`}>
              View Live Site <ExternalLink size={16} />
            </a>
          </header>

          <figure className="mb-12 rounded-lg overflow-hidden gradient-border">
            <img src={project.image} alt={`${project.title} — ${project.description}`} className="w-full h-auto object-cover" loading="lazy" />
          </figure>

          {(cs.role || cs.dates) && (
            <section className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cs.role && (
                <div className="gradient-border p-5">
                  <h2 className="text-sm font-semibold text-primary mb-1">Role</h2>
                  <p className="text-foreground">{cs.role}</p>
                </div>
              )}
              {cs.dates && (
                <div className="gradient-border p-5">
                  <h2 className="text-sm font-semibold text-primary mb-1">Timeline</h2>
                  <p className="text-foreground">{cs.dates}</p>
                </div>
              )}
            </section>
          )}

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            {hasOverview ? <p className="text-foreground/80">{cs.overview}</p> : <Placeholder>Full write-up coming soon. In the meantime, see the live site link above.</Placeholder>}
          </section>

          {hasChallenges && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
              <ul className="space-y-4">
                {cs.challenges.map((c, i) => (
                  <li key={i} className="gradient-border p-5">
                    {c.title && <h3 className="font-semibold mb-1">{c.title}</h3>}
                    <p className="text-foreground/80">{c.body || c}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {hasSolutions && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Solutions</h2>
              <ul className="space-y-4">
                {cs.solutions.map((s, i) => (
                  <li key={i} className="gradient-border p-5">
                    {s.title && <h3 className="font-semibold mb-1">{s.title}</h3>}
                    <p className="text-foreground/80">{s.body || s}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {hasMetrics && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Outcomes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cs.metrics.map((m, i) => (
                  <div key={i} className="gradient-border p-5 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{m.value}</div>
                    <div className="text-sm text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {hasLessons && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">What I Took Away</h2>
              <p className="text-foreground/80">{cs.lessons}</p>
            </section>
          )}

          <div className="text-center mt-12">
            <Link to="/#projects" className="primary-button w-fit inline-flex items-center mx-auto gap-2">
              <ArrowLeft size={16} /> Back to Projects
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
