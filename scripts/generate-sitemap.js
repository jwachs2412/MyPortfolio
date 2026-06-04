// Regenerates public/sitemap.xml from the single source of truth in
// src/data/caseStudies.js. Runs automatically before every build via the
// "prebuild" npm script, and can be run on its own with `npm run sitemap`.
//
// Per-page <lastmod> comes from each project's `lastmod` field so the dates
// reflect when content actually changed — not the build date. The home page
// and the HTML /sitemap page inherit the most recent project lastmod, since
// both render the full project list.

import { writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, resolve } from "node:path"
import { caseStudyProjects } from "../src/data/caseStudies.js"

const ORIGIN = "https://www.joshwachsman.com"

const here = dirname(fileURLToPath(import.meta.url))
const outPath = resolve(here, "../public/sitemap.xml")

// Newest project lastmod, used for the routes that list every project.
const latest = caseStudyProjects
  .map(p => p.lastmod)
  .filter(Boolean)
  .sort()
  .at(-1)

const entries = [
  { loc: "/", lastmod: latest, changefreq: "monthly", priority: "1.0" },
  ...caseStudyProjects.map(p => ({
    loc: `/projects/${p.slug}`,
    lastmod: p.lastmod,
    changefreq: "monthly",
    priority: "0.8"
  })),
  { loc: "/sitemap", lastmod: latest, changefreq: "monthly", priority: "0.5" }
]

const urlBlock = ({ loc, lastmod, changefreq, priority }) =>
  `  <url>
    <loc>${ORIGIN}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(urlBlock).join("\n")}
</urlset>
`

writeFileSync(outPath, xml)
console.log(`sitemap.xml written: ${entries.length} URLs (latest lastmod ${latest})`)
