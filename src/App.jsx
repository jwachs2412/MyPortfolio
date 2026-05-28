import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { lazy, Suspense, useEffect } from "react"

const Sitemap = lazy(() => import("./pages/Sitemap").then(m => ({ default: m.Sitemap })))

const GA_ID = "G-L2VS2BHQZD"

const GAListener = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
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

    // Defer analytics until the browser is idle so it never competes with LCP/critical work.
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(loadOrTrack, { timeout: 3000 })
      return () => window.cancelIdleCallback?.(id)
    }
    const id = window.setTimeout(loadOrTrack, 2000)
    return () => window.clearTimeout(id)
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </GAListener>
      </BrowserRouter>
    </>
  )
}

export default App
