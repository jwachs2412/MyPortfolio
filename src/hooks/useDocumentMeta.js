import { useEffect } from "react"

const DEFAULT_TITLE = "Josh Wachsman — Front-End Web Developer | React, Accessibility, Performance"
const DEFAULT_DESCRIPTION =
  "Josh Wachsman is a front-end web developer with 10+ years of experience building fast, accessible, WCAG-compliant React interfaces. Portfolio of career-site work for AT&T, Dell, UPS, Petco, Santander and more."

const setMeta = (name, content) => {
  const el = document.querySelector(`meta[name="${name}"]`)
  if (el) el.setAttribute("content", content)
}

const setOg = (property, content) => {
  const el = document.querySelector(`meta[property="${property}"]`)
  if (el) el.setAttribute("content", content)
}

export const useDocumentMeta = ({ title, description } = {}) => {
  useEffect(() => {
    const resolvedTitle = title || DEFAULT_TITLE
    const resolvedDescription = description || DEFAULT_DESCRIPTION

    document.title = resolvedTitle
    setMeta("description", resolvedDescription)
    setOg("og:title", resolvedTitle)
    setOg("og:description", resolvedDescription)
    setMeta("twitter:title", resolvedTitle)
    setMeta("twitter:description", resolvedDescription)
  }, [title, description])
}
