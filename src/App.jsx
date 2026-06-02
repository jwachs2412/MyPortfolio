import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { lazy, Suspense, useEffect } from "react"

const Sitemap = lazy(() => import("./pages/Sitemap").then(m => ({ default: m.Sitemap })))
const CaseStudy = lazy(() => import("./pages/CaseStudy").then(m => ({ default: m.CaseStudy })))

const GA_ID = "G-L2VS2BHQZD"
const GA_INTERACTION_EVENTS = ["scroll", "click", "keydown", "touchstart", "mousemove"]
const CANONICAL_ORIGIN = "https://www.joshwachsman.com"

const setCanonical = pathname => {
  const href = `${CANONICAL_ORIGIN}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement("link")
    link.rel = "canonical"
    document.head.appendChild(link)
  }
  link.href = href
}

// Wait for the user to actually engage before loading GTM/GA. This keeps the
// script off the critical path entirely. A 10s timeout ensures pageviews still
// fire for users who load the page and just read it without interacting.
let gaTriggered = false
const armGaLoader = load => {
  if (gaTriggered) {
    load()
    return () => {}
  }
  const fire = () => {
    if (gaTriggered) return
    gaTriggered = true
    cleanup()
    load()
  }
  const cleanup = () => {
    GA_INTERACTION_EVENTS.forEach(ev => window.removeEventListener(ev, fire))
    clearTimeout(timer)
  }
  GA_INTERACTION_EVENTS.forEach(ev => window.addEventListener(ev, fire, { once: true, passive: true }))
  const timer = window.setTimeout(fire, 10000)
  return cleanup
}

const GAListener = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    setCanonical(location.pathname)

    const loadOrTrack = () => {
      if (!window.gtag) {
        const script = document.createElement("script")
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
        document.head.appendChild(script)

        window.dataLayer = window.dataLayer || []
        window.gtag = function () {
          window.dataLayer.push(arguments)
        }
        window.gtag("js", new Date())
        window.gtag("config", GA_ID, { page_path: location.pathname })
      } else {
        window.gtag("config", GA_ID, { page_path: location.pathname })
      }
    }

    return armGaLoader(loadOrTrack)
  }, [location])

  return children
}

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <GAListener>
          <Suspense fallback={null}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/projects/:slug" element={<CaseStudy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </GAListener>
      </BrowserRouter>
    </>
  )
}

export default App
