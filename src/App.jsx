import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { useEffect } from "react"

// Component to handle Google Analytics
const GAListener = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    // Load GA script once
    if (!window.gtag) {
      const script1 = document.createElement("script")
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`
      document.head.appendChild(script1)

      const script2 = document.createElement("script")
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-L2VS2BHQZD', { page_path: window.location.pathname });
      `
      document.head.appendChild(script2)
    } else {
      // Track pageview on route change
      window.gtag("config", "G-L2VS2BHQZD", { page_path: location.pathname })
    }
  }, [location])

  return children
}

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <GAListener>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GAListener>
      </BrowserRouter>
    </>
  )
}

export default App
