import { useEffect } from "react"
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "../lib/seo"

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
