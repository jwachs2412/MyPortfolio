import { ArrowRight, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import { projects } from "../data/caseStudies"

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">The following projects were developed during my time with my previous employer, with a focus on coding best practices, accessibility compliance, and optimized performance to enhance user experience.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="relative group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={`${project.title} — ${project.description}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium bg-primary/30 rounded-full text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300 after:absolute after:block after:inset-0" aria-label={`Visit ${project.title} (opens in a new tab)`}>
                      <ExternalLink size={20} />
                    </a>
                    {project.slug && (
                      <Link to={`/projects/${project.slug}`} className="relative z-10 text-sm font-medium text-primary hover:underline">
                        Case study →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a className="primary-button w-fit flex items-center mx-auto gap-2" target="_blank" rel="noopener noreferrer" href="https://github.com/jwachs2412">
            View My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
