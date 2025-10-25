import { useState } from "react"
import { cn } from "../lib/utils"

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "fontend" },
  { name: "SASS", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 15, category: "frontend" },
  { name: "JavaScript", level: 75, category: "frontend" },
  { name: "Typescript", level: 50, category: "frontend" },
  { name: "jQuery", level: 70, category: "frontend" },
  { name: "Reveal", level: 70, category: "frontend" },
  { name: "Swiper", level: 60, catgory: "frontend" },
  { name: "Fancybox", level: 85, category: "frontend" },
  { name: "Slick Slider", level: 90, category: "frontend" },
  { name: "Animate On Scroll (AOS)", level: 90, category: "frontend" },
  { name: "React", level: 15, category: "frontend" },
  { name: "Bootstrap", level: 70, category: "frontend" },

  // Backend
  { name: "SQL", level: 60, category: "backend" },
  { name: "PHP", level: 30, category: "backend" },
  { name: "Razor", level: 30, category: "backend" },
  { name: "Python", level: 10, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "MySQL", level: 65, category: "tools" },
  { name: "VS Code", level: 65, category: "tools" },
  { name: "Photoshop", level: 95, category: "tools" },
  { name: "Illustrator", level: 40, category: "tools" },
  { name: "Zeplin", level: 95, category: "tools" },
  { name: "Command-Line Interface (CLI)", level: 65, category: "tools" },
  { name: "WordPress", level: 50, category: "tools" }
]

const categories = ["all", "frontend", "backend", "tools"]

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredSkills = skills.filter(skill => activeCategory === "all" || skill.category === activeCategory)
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button key={key} onClick={() => setActiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary")}>
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{ width: skill.level + "%" }} />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
