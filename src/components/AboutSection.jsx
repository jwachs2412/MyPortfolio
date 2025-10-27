import { Briefcase, Code, PersonStanding } from "lucide-react"

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Background</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl text-semibold">Dedicated Web Developer</h3>

            <p className="text-muted-foreground">With over 10 years of experience in web development, I specialize in front-end development, creating fast, accessible, and visually polished web experiences built with modern technologies.</p>

            <p className="text-muted-foreground">I've always enjoyed the process of turning complex problems into clear, functional solutions. My work is driven by a desire to build tools and experiences that make life easier for clients and users alike. I'm a coder who's constantly learning new technologies, and I put that knowledge into action by building projects that challenge me to think creatively and grow as a developer.</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="primary-button">
                Contact Me
              </a>

              {/* <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                Download CV
              </a> */}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex flex-col items-center text-center gap-2 md:flex-row md:items-start md:text-left md:gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">Developing responsive web experiences using modern technologies.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex flex-col items-center text-center gap-2 md:flex-row md:items-start md:text-left md:gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <PersonStanding className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Accessibility</h4>
                  <p className="text-muted-foreground">Implementing accessibility best practices that ensure an inclusive experience for all users.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex flex-col items-center text-center gap-2 md:flex-row md:items-start md:text-left md:gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">Delivering results through executing projects efficiently from planning to deployment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
