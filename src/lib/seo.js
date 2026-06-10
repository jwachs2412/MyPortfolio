// Single source of truth for per-route SEO metadata.
//
// Imported by BOTH the React runtime (useDocumentMeta and its callers) and the
// build-time prerender script (scripts/prerender.js). Because the static <head>
// baked into each HTML file and the values the app sets on the client come from
// the same functions here, there is no drift and no hydration mismatch: when JS
// boots it re-applies the identical title/description it was already served.
//
// Note: this module must stay framework- and platform-agnostic (no React, no DOM,
// no Node APIs) so it loads cleanly in the browser bundle and under plain Node.
import { caseStudyProjects, getProjectBySlug } from "../data/caseStudies.js"

export const ORIGIN = "https://www.joshwachsman.com"
export const OG_IMAGE = `${ORIGIN}/og-image.png`

export const DEFAULT_TITLE = "Josh Wachsman — Accessible Front-End React Developer"
export const DEFAULT_DESCRIPTION =
  "Front-end web developer with 10+ years building fast, accessible, WCAG-compliant React interfaces for AT&T, Dell, UPS, Petco and Santander."

// Screaming Frog / SERP limits we keep meta within.
export const TITLE_MAX = 60
export const DESCRIPTION_MAX = 155

const len = s => [...s].length

const canonicalFor = path => `${ORIGIN}${path === "/" ? "/" : path.replace(/\/$/, "")}`

// Prefer the branded "<Title> — Josh Wachsman" form. When that exceeds 60 chars,
// fall back to "<Title> — Case Study" (shorter, still distinct from the page's H1),
// and only as a last resort the bare title. The suffix matters: a title identical
// to the H1 is a wasted SEO signal, so we keep them different wherever length allows.
const titleFor = title => {
  const branded = `${title} — Josh Wachsman`
  if (len(branded) <= TITLE_MAX) return branded
  const labelled = `${title} — Case Study`
  if (len(labelled) <= TITLE_MAX) return labelled
  return title
}

// Unique, bounded description. Prefixing with the (unique) project title keeps
// descriptions distinct even when two projects share the same stack blurb.
const caseStudyDescription = project => {
  const full = `${project.title} — ${project.description}`
  return len(full) <= DESCRIPTION_MAX ? full : `${[...full].slice(0, DESCRIPTION_MAX - 1).join("")}…`
}

const caseStudyJsonLd = project => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: `${project.title} — Case Study`,
  url: `${ORIGIN}/projects/${project.slug}`,
  image: `${ORIGIN}${project.image}`,
  description: project.description,
  author: { "@id": `${ORIGIN}/#person` },
  keywords: project.tags.join(", ")
})

const caseStudyMeta = project => ({
  path: `/projects/${project.slug}`,
  title: titleFor(project.title),
  description: caseStudyDescription(project),
  canonical: canonicalFor(`/projects/${project.slug}`),
  ogImage: `${ORIGIN}${project.image}`,
  jsonLd: caseStudyJsonLd(project)
})

const homeMeta = () => ({
  path: "/",
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  canonical: canonicalFor("/"),
  ogImage: OG_IMAGE,
  jsonLd: null
})

const sitemapMeta = () => ({
  path: "/sitemap",
  title: "Site Map — Josh Wachsman Portfolio",
  description: "Browse every section and case study on Josh Wachsman's portfolio site.",
  canonical: canonicalFor("/sitemap"),
  ogImage: OG_IMAGE,
  jsonLd: null
})

// Resolve a client path to its meta. Unknown paths get the default (home) meta
// with a self-canonical, mirroring how the SPA treats unmatched routes.
export const metaForPath = pathname => {
  if (pathname === "/") return homeMeta()
  if (pathname === "/sitemap") return sitemapMeta()
  const match = pathname.match(/^\/projects\/([^/]+)\/?$/)
  if (match) {
    const project = getProjectBySlug(match[1])
    if (project) return caseStudyMeta(project)
  }
  return { ...homeMeta(), path: pathname, canonical: canonicalFor(pathname), jsonLd: null }
}

// Every route the prerender step should emit a static HTML file for.
export const prerenderRoutes = () => [homeMeta(), sitemapMeta(), ...caseStudyProjects.map(caseStudyMeta)]
