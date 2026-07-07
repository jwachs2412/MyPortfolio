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

// Meta keywords. Google ignores this tag, but Bing and other engines still read
// it, so we keep a tight, relevant list per route (no stuffing) rather than omit
// it. Site-wide defaults for the home and sitemap pages; case studies derive
// theirs from the project's real tag stack below.
export const DEFAULT_KEYWORDS = [
  "Josh Wachsman",
  "front-end developer",
  "React developer",
  "web accessibility",
  "accessible web development",
  "WCAG",
  "web performance",
  "JavaScript",
  "HTML",
  "CSS",
  "SCSS",
  "Tailwind CSS",
  "career site developer",
  "portfolio"
].join(", ")

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

// Per-project keywords: the project's actual tech stack plus the terms that place
// the page (its name, that it's a career-site case study, and the site owner).
const caseStudyKeywords = project =>
  [project.title, ...project.tags, "career site", "front-end developer", "case study", "Josh Wachsman"].join(", ")

// CreativeWork (the case study itself) + a BreadcrumbList (Home › Projects › this
// page). Breadcrumbs can render as a breadcrumb trail in Google results, which
// improves how the listing looks and its click-through.
const caseStudyJsonLd = project => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CreativeWork",
      name: `${project.title} — Case Study`,
      url: `${ORIGIN}/projects/${project.slug}`,
      image: `${ORIGIN}${project.image}`,
      description: project.description,
      author: { "@id": `${ORIGIN}/#person` },
      keywords: project.tags.join(", ")
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${ORIGIN}/` },
        { "@type": "ListItem", position: 2, name: "Projects", item: `${ORIGIN}/#projects` },
        { "@type": "ListItem", position: 3, name: project.title, item: `${ORIGIN}/projects/${project.slug}` }
      ]
    }
  ]
})

// The home page is Josh's profile page. ProfilePage (with the Person as mainEntity)
// helps Google treat the site as a person entity — Knowledge Panel eligibility.
const profilePageJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${ORIGIN}/#profilepage`,
  url: `${ORIGIN}/`,
  name: DEFAULT_TITLE,
  isPartOf: { "@id": `${ORIGIN}/#website` },
  about: { "@id": `${ORIGIN}/#person` },
  mainEntity: { "@id": `${ORIGIN}/#person` }
})

const caseStudyMeta = project => ({
  path: `/projects/${project.slug}`,
  title: titleFor(project.title),
  description: caseStudyDescription(project),
  keywords: caseStudyKeywords(project),
  canonical: canonicalFor(`/projects/${project.slug}`),
  ogImage: `${ORIGIN}${project.image}`,
  jsonLd: caseStudyJsonLd(project)
})

const homeMeta = () => ({
  path: "/",
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  canonical: canonicalFor("/"),
  ogImage: OG_IMAGE,
  jsonLd: profilePageJsonLd()
})

const sitemapMeta = () => ({
  path: "/sitemap",
  title: "Site Map — Josh Wachsman Portfolio",
  description: "Browse every section and case study on Josh Wachsman's portfolio site.",
  keywords: DEFAULT_KEYWORDS,
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
