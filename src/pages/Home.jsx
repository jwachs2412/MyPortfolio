import { ThemeToggle } from "../components/ThemeToggle"
import { BlobBackground } from "../components/BlobBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ConnectSection } from "../components/ConnectSection"
import { Footer } from "../components/Footer"
import { useDocumentMeta } from "../hooks/useDocumentMeta"

export const Home = () => {
  useDocumentMeta()
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <BlobBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ConnectSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
