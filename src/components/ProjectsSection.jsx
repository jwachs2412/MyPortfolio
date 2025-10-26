import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "A personal portfolio and skills based site built using React, JavaScript, HTML, and TailwindCSS.",
    image: "/projects/project-personal-website.png",
    tags: ["React", "JavaScript", "HTML", "TailwindCSS"],
    demoUrl: "https://www.joshwachsman.com/"
    // githubUrl: "#"
  },
  {
    // id: 2,
    // title: "Beth Israel Lahey Health Career Hub",
    // description: "A talent acquisition site built using HTML, SASS, JavaScript and Razor.",
    // image: "/projects/project-beth-israel-lahey-health.png",
    // tags: ["HTML", "SASS", "JavaScript", "Razor"],
    // demoUrl: "https://jobs.bilh.org/"
    // githubUrl: "#"
    id: 2,
    title: "AT&T Career Hub",
    description: "A talent acquisition site built using HTML, SASS, JavaScript and Razor.",
    image: "/projects/project-att.png",
    tags: ["HTML", "SASS", "JavaScript", "Razor"],
    demoUrl: "https://www.att.jobs/"
  },
  {
    id: 3,
    title: "Boston Pizza Career Hub",
    description: "A talent acquisition site built using HTML, SASS, JavaScript, Razor, Swiper and Fancybox.",
    image: "/projects/project-boston-pizza.png",
    tags: ["HTML", "SASS", "JavaScript", "Razor", "Swiper", "Fancybox"],
    demoUrl: "https://careers.bostonpizza.ca/en"
    // githubUrl: "#"
  },
  {
    id: 4,
    title: "Dell Technologies Career Hub",
    description: "A talent acquisition site built using HTML, SASS, JavaScript, Razor and Slick Slider.",
    image: "/projects/project-dell-technologies.png",
    tags: ["HTML", "SASS", "JavaScript", "Razor", "Slick Slider"],
    demoUrl: "https://jobs.dell.com/en"
    // githubUrl: "#"
  },
  {
    id: 5,
    title: "National Veterinarians Association Career Hub",
    description: "A talent acquisition site built using HTML, SASS, JavaScript, Razor and Git/Github.",
    image: "/projects/project-nva-general-practice.png",
    tags: ["HTML", "SASS", "JavaScript", "Razor", "Git/Github"],
    demoUrl: "https://careers.nva.com/"
    // githubUrl: "#"
  },
  {
    id: 6,
    title: "Petco Career Hub",
    description: "A talent acquisition site built using HTML, SASS, JavaScript, Razor and Git/Github.",
    image: "/projects/project-petco.png",
    tags: ["HTML", "SASS", "JavaScript", "Razor", "Git/Github"],
    demoUrl: "https://careers.petco.com/"
    // githubUrl: "#"
  },
  {
    id: 7,
    title: "Santander Career Hub",
    description: "A talent acquisition site built using HTML, SASS, JavaScript, Razor and AOS - Animate On Scroll.",
    image: "/projects/project-santander.png",
    tags: ["HTML", "SASS", "JavaScript", "Razor", "AOS - Animate On Scroll"],
    demoUrl: "https://www.santandercareers.com/"
    // githubUrl: "#"
  },
  {
    id: 8,
    title: "Synopsys Career Hub",
    description: "A talent acquisition site built using HTML, SASS, JavaScript, Razor and Reveal.",
    image: "/projects/project-synopsys.png",
    tags: ["HTML", "SASS", "JavaScript", "Razor", "Reveal"],
    demoUrl: "https://careers.synopsys.com/"
    // githubUrl: "#"
  },
  {
    id: 9,
    title: "UPS Career Hub",
    description: "A talent acquisition site built using HTML, SASS, JavaScript and Razor.",
    image: "/projects/project-ups.png",
    tags: ["HTML", "SASS", "JavaScript", "Razor", "Swiper", "Fancybox"],
    demoUrl: "https://www.jobs-ups.com/us/en/"
    // githubUrl: "#"
  }
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">The following projects were developed during my time with my previous employer, with a focus on coding best practices, accessibility compliance, and optimized performance to enhance user experience.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="relative group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span key={key} className="px-2 py-1 text-xs font-medium bg-primary/30 rounded-full text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300 after:absolute after:block after:inset-0">
                      <ExternalLink size={20} />
                    </a>
                    {/* <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                      <Github size={20} />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a className="primary-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/jwachs2412">
            View My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
