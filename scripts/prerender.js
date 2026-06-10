// Build-time prerender: turn the single built dist/index.html into one static
// HTML file per route, each with the correct <head> (title, description,
// canonical, Open Graph / Twitter, JSON-LD) and a per-route <noscript> fallback
// (real h1, headings, copy, internal links) baked into the raw HTML.
//
// Why this exists: the app is a client-rendered SPA, so without prerendering the
// raw HTML for every route is identical to the home page — same canonical, same
// title, no per-page content. Non-rendering crawlers (e.g. Screaming Frog) then
// see every sub-page "canonicalised" to the home page, and social scrapers (which
// never run JS) show the home preview for every shared link. This step fixes both.
//
// Runs automatically after `vite build` via the "postbuild" npm script. Every
// substitution is asserted: if a future Vite version changes the emitted markup,
// the build FAILS loudly here instead of silently shipping stale meta.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, resolve } from "node:path"
import { caseStudyProjects } from "../src/data/caseStudies.js"
import { metaForPath } from "../src/lib/seo.js"

const here = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(here, "../dist")
const templatePath = resolve(distDir, "index.html")

const escAttr = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
const escText = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
// Prevent a stray "</script>" in data from terminating the JSON-LD block early.
const jsonLdSafe = obj => JSON.stringify(obj).replace(/</g, "\\u003c")

// Apply a replacement and assert it matched exactly once, so a markup change in a
// future Vite release surfaces as a hard build error rather than a silent no-op.
const replaceOnce = (html, re, fn, label) => {
  let count = 0
  const out = html.replace(re, (...args) => {
    count++
    return fn(...args)
  })
  if (count !== 1) throw new Error(`prerender: expected exactly 1 match for "${label}", found ${count}`)
  return out
}

const setMetaContent = (html, idAttr, value, label) =>
  replaceOnce(html, new RegExp(`(<meta[^>]*${idAttr}[^>]*content=")[^"]*(")`, "g"), (_m, a, b) => a + escAttr(value) + b, label)

// ---- per-route <noscript> fallback ---------------------------------------

const primaryNav = `        <nav aria-label="Primary">
          <ul>
            <li><a href="/#about">About</a></li>
            <li><a href="/#skills">Skills</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/#connect">Connect</a></li>
            <li><a href="/sitemap">Site map</a></li>
          </ul>
        </nav>`

// Titles only — used in a case study's "More case studies" list (that page
// already carries its own full content below).
const caseStudyList = caseStudyProjects
  .map(p => `            <li><a href="/projects/${p.slug}">${escText(p.title)}</a></li>`)
  .join("\n")

// Title + description — used on the home and sitemap fallbacks so the raw HTML
// carries real, per-project descriptive text (not just a link).
const caseStudyListDetailed = caseStudyProjects
  .map(p => `            <li><a href="/projects/${p.slug}">${escText(p.title)}</a> — ${escText(p.description)}</li>`)
  .join("\n")

const sectionList = [
  ["/#about", "About", "My background and what I do"],
  ["/#skills", "Skills", "The technologies and tools I work with"],
  ["/#projects", "Projects", "Featured career-site work and case studies"],
  ["/#connect", "Connect", "Ways to get in touch"]
]
  .map(([href, name, desc]) => `            <li><a href="${href}">${name}</a> — ${desc}</li>`)
  .join("\n")

const intro = `I'm a front-end web developer with 10+ years of experience building fast,
          accessible, WCAG-compliant React interfaces. I focus on accessibility and
          performance — semantic HTML, components that meet WCAG standards, and quick-loading
          pages — and this portfolio collects the career-site work I've built for major brands,
          each with a written case study covering the brief, the constraints, and what I shipped.`

// h1 mirrors the rendered hero so the non-JS H1 differs from the <title> (and
// matches what JS-rendering crawlers and users see).
const homeNoscript = () => `<noscript>
      <header>
        <h1>Hi, I'm Josh Wachsman</h1>
        <p>${intro}</p>
${primaryNav}
      </header>
      <main>
        <section aria-labelledby="case-studies-heading">
          <h2 id="case-studies-heading">Case studies</h2>
          <ul>
${caseStudyListDetailed}
          </ul>
        </section>
        <section aria-labelledby="sections-heading">
          <h2 id="sections-heading">Sections</h2>
          <ul>
${sectionList}
          </ul>
        </section>
      </main>
    </noscript>`

const sitemapNoscript = `<noscript>
      <header>
        <h1>Site Map</h1>
        <p>${intro}</p>
${primaryNav}
      </header>
      <main>
        <section aria-labelledby="sections-heading">
          <h2 id="sections-heading">Sections</h2>
          <ul>
${sectionList}
          </ul>
        </section>
        <section aria-labelledby="case-studies-heading">
          <h2 id="case-studies-heading">Case studies</h2>
          <ul>
${caseStudyListDetailed}
          </ul>
        </section>
      </main>
    </noscript>`

// Emit the full case-study narrative (overview, challenges, solutions, lessons)
// as real text, so the raw HTML is a genuine text version of the rendered page.
const para = (label, text) => `        <p>${label ? `<strong>${escText(label)}.</strong> ` : ""}${escText(text)}</p>`

const projectNoscript = project => {
  const cs = project.caseStudy || {}
  const body = [
    cs.overview ? para("", cs.overview) : "",
    ...(cs.challenges || []).map(c => para(c.title, c.body)),
    ...(cs.solutions || []).map(s => para(s.title, s.body)),
    cs.lessons ? para("What I took away", cs.lessons) : ""
  ]
    .filter(Boolean)
    .join("\n")

  return `<noscript>
      <header>
        <h1>${escText(project.title)}</h1>
        <p>${escText(project.description)}</p>
${primaryNav}
      </header>
      <main>
${body}
        <section aria-labelledby="more-heading">
          <h2 id="more-heading">More case studies</h2>
          <ul>
${caseStudyList}
          </ul>
        </section>
        <p><a href="/#projects">Back to all projects</a></p>
      </main>
    </noscript>`
}

const noscriptFor = route => {
  if (route.kind === "home") return homeNoscript()
  if (route.kind === "sitemap") return sitemapNoscript
  return projectNoscript(route.project)
}

// ---- render one route ----------------------------------------------------

const render = (template, route) => {
  const { meta } = route
  let html = template

  html = replaceOnce(html, /(<title>)[^<]*(<\/title>)/g, (_m, a, b) => a + escText(meta.title) + b, "title")
  html = setMetaContent(html, 'name="description"', meta.description, "description")
  html = replaceOnce(html, /(<link rel="canonical" href=")[^"]*(")/g, (_m, a, b) => a + escAttr(meta.canonical) + b, "canonical")

  html = setMetaContent(html, 'property="og:title"', meta.title, "og:title")
  html = setMetaContent(html, 'property="og:description"', meta.description, "og:description")
  html = setMetaContent(html, 'property="og:url"', meta.canonical, "og:url")
  html = setMetaContent(html, 'property="og:image:secure_url"', meta.ogImage, "og:image:secure_url")
  html = setMetaContent(html, 'property="og:image"', meta.ogImage, "og:image")
  html = setMetaContent(html, 'name="twitter:title"', meta.title, "twitter:title")
  html = setMetaContent(html, 'name="twitter:description"', meta.description, "twitter:description")
  html = setMetaContent(html, 'name="twitter:image"', meta.ogImage, "twitter:image")

  // Per-route CreativeWork JSON-LD, just before </head> (case studies only).
  if (meta.jsonLd) {
    const block = `  <script type="application/ld+json" data-casestudy="${escAttr(route.project.slug)}">${jsonLdSafe(meta.jsonLd)}</script>\n  </head>`
    html = replaceOnce(html, /\s*<\/head>/, () => "\n" + block, "json-ld insertion point (</head>)")
  }

  html = replaceOnce(html, /<!-- PRERENDER:NOSCRIPT -->/g, () => noscriptFor(route), "noscript marker")

  return html
}

// ---- run -----------------------------------------------------------------

const template = readFileSync(templatePath, "utf8")

const routes = [
  { kind: "home", meta: metaForPath("/"), out: resolve(distDir, "index.html") },
  { kind: "sitemap", meta: metaForPath("/sitemap"), out: resolve(distDir, "sitemap.html") },
  ...caseStudyProjects.map(project => ({
    kind: "project",
    project,
    meta: metaForPath(`/projects/${project.slug}`),
    out: resolve(distDir, `projects/${project.slug}.html`)
  }))
]

mkdirSync(resolve(distDir, "projects"), { recursive: true })

for (const route of routes) {
  writeFileSync(route.out, render(template, route))
}

console.log(`prerender: wrote ${routes.length} HTML files (home, sitemap, ${caseStudyProjects.length} case studies)`)
