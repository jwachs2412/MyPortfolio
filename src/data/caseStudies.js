// Single source of truth for both the homepage project cards and the
// /projects/:slug case-study routes.
//
// Each entry uses what we already have (title, stack, demoUrl, image).
// The `caseStudy` block holds Phase-2 narrative content. Anything left
// null renders a "Coming soon" placeholder on the case-study page —
// fill these in (role, dates, overview, challenges, solutions, metrics,
// lessons) and the page picks them up automatically.
//
// Set `slug: null` to opt a project out of having its own case-study route.
//
// `lastmod` (YYYY-MM-DD) feeds public/sitemap.xml, which is regenerated from
// this file on every build by scripts/generate-sitemap.js. Bump a project's
// lastmod whenever its content meaningfully changes — that's the signal
// Google uses to decide a page is worth re-crawling. The home page and the
// HTML /sitemap page inherit the most recent project lastmod automatically.

export const projects = [
  {
    id: 1,
    slug: null,
    title: "Personal Website",
    description: "A personal portfolio and skills based site built using React, JavaScript, jQuery, HTML, SCSS and TailwindCSS.",
    image: "/projects/project-personal-website.png",
    tags: ["React", "JavaScript", "jQuery", "HTML", "SCSS", "TailwindCSS"],
    demoUrl: "https://www.joshwachsman.com/",
    caseStudy: null
  },
  {
    id: 2,
    slug: "att-careers",
    lastmod: "2026-06-02",
    title: "AT&T Career Hub",
    description: "A talent acquisition site built using HTML, SCSS, JavaScript and Razor.",
    image: "/projects/project-att.png",
    tags: ["HTML", "SCSS", "JavaScript", "Razor"],
    demoUrl: "https://www.att.jobs/",
    caseStudy: {
      role: "Front-End Developer, Radancy (fka TMP Worldwide)",
      dates: "January 2023 – June 2023",
      overview:
        "AT&T needed a career site where candidates could search for open positions and learn more about the company and the roles it offers. I owned the front-end build at Radancy (formerly TMP Worldwide) as the dedicated developer on the engagement.",
      challenges: [
        {
          title: "Compressed timeline mid-build",
          body: "Partway through the project, the client moved their launch date up significantly. The original schedule no longer fit the new deadline, and pulling additional developers in at that point would have spent the saved time on onboarding."
        }
      ],
      solutions: [
        {
          title: "Reusable, drop-in sections",
          body: "I built each major page region — hero blocks, content sections, job grids, calls to action — as self-contained components that could be placed anywhere on any page. Every page after the first reused work I had already shipped, which is what made the new deadline workable as a single developer."
        },
        {
          title: "Targeted overtime",
          body: "I focused the extra hours on whichever section was about to unblock the next dependency, so design hand-offs and content reviews never had to wait on me."
        }
      ],
      metrics: [
        { value: "Website of the Year", label: "Radancy company award" },
        { value: "Solo build", label: "Sole front-end developer" }
      ],
      lessons:
        "Confirmed I can hit a moved-up client deadline on my own without escalating to additional developers. The site went on to win Radancy's Website of the Year — a recognition I was a key part of delivering. The reusable-section pattern has been my go-to starting move on multi-page builds under time pressure ever since."
    }
  },
  {
    id: 3,
    slug: "boston-pizza-careers",
    lastmod: "2026-06-02",
    title: "Boston Pizza Career Hub",
    description: "A talent acquisition site built using HTML, SCSS, JavaScript, Razor, Swiper and Fancybox.",
    image: "/projects/project-boston-pizza.png",
    tags: ["HTML", "SCSS", "JavaScript", "Razor", "Swiper", "Fancybox"],
    demoUrl: "https://careers.bostonpizza.ca/en",
    caseStudy: {
      role: "Front-End Developer, Radancy (fka TMP Worldwide)",
      dates: "November 2019 – March 2020",
      overview:
        "Boston Pizza wanted a refreshed career site where candidates could learn more about the company and search for roles across their footprint. I owned the front-end build at Radancy (formerly TMP Worldwide) as the dedicated developer on the engagement.",
      challenges: [
        {
          title: "New library, live deadline",
          body: "The home page called for a 'Get to Know Us' slider built on Swiper — a mobile-first slider library I hadn't used before — and the project schedule didn't have an obvious 'learn Swiper' block built into it."
        }
      ],
      solutions: [
        {
          title: "Ramp up in isolation before integrating",
          body: "I prototyped the slider against dummy markup outside the main build, so climbing the learning curve didn't block work on the rest of the site. Once the Swiper API clicked, dropping it into the real page was straightforward."
        }
      ],
      metrics: [],
      lessons:
        "The best part of this one was getting to add a new tool to the kit. Swiper turned out to be more approachable than the docs first suggested, and it's stayed in my regular rotation since."
    }
  },
  {
    id: 4,
    slug: "dell-technologies-careers",
    lastmod: "2026-06-02",
    title: "Dell Technologies Career Hub",
    description: "A talent acquisition site built using HTML, SCSS, JavaScript, Razor and Slick Slider.",
    image: "/projects/project-dell-technologies.png",
    tags: ["HTML", "SCSS", "JavaScript", "Razor", "Slick Slider"],
    demoUrl: "https://jobs.dell.com/en",
    caseStudy: {
      role: "Front-End Developer, Radancy (fka TMP Worldwide)",
      dates: "August 2021 – December 2021",
      overview:
        "Dell Technologies needed a career site where candidates could search for open roles and learn more about the company. I owned the front-end build at Radancy (formerly TMP Worldwide), working alongside the broader project team on the engagement.",
      challenges: [
        {
          title: "Scope creep throughout the engagement",
          body: "Dell had a lot of moving parts on their side, which meant change requests showed up mid-build instead of staying inside the original spec. Scope creep is something we normally work hard to avoid, but on a project this size some of it was unavoidable."
        }
      ],
      solutions: [
        {
          title: "Absorbed mid-build changes without slipping the schedule",
          body: "Each change request got worked into my queue as it landed, with timeline impact called out honestly when there was one. The launch date held."
        },
        {
          title: "Team coordination on the fly",
          body: "When changes touched work beyond the front-end, the team coordinated quickly enough that the rest of the build could keep moving in parallel rather than queueing behind the latest revision."
        }
      ],
      metrics: [],
      lessons:
        "Biggest takeaway from this one was about the team rather than the build itself. Reacting cleanly to mid-project client changes is a lot easier when everyone around you can adapt at the same speed — and Dell was a project where that actually held up under pressure."
    }
  },
  {
    id: 5,
    slug: "nva-careers",
    lastmod: "2026-06-04",
    title: "National Veterinarians Association Career Hub",
    description: "A talent acquisition site built using HTML, SCSS, JavaScript, Razor and Git/Github.",
    image: "/projects/project-nva-general-practice.png",
    tags: ["HTML", "SCSS", "JavaScript", "Razor", "Git/Github"],
    demoUrl: "https://careers.nva.com/",
    caseStudy: {
      role: "Front-End Developer, Radancy (fka TMP Worldwide)",
      dates: "August 2024 – October 2024",
      overview:
        "NVA needed a career site where candidates could search for open positions, read up on the different veterinary careers the organization offers, and learn more about the company as a whole. I owned the front-end build at Radancy (formerly TMP Worldwide) as the dedicated developer on the engagement.",
      challenges: [
        {
          title: "First team build on a new GitHub workflow",
          body: "This was one of the first projects where Radancy moved its front-end work into GitHub, and the first time I'd used it on a team rather than for my own personal projects. Other developers needed to be able to pull the project down and pick it up if they were ever assigned to the client, so making sure the most up-to-date files actually lived in the repo — not just on my machine — was the part that mattered most."
        }
      ],
      solutions: [
        {
          title: "Treated the repo as the source of truth",
          body: "I got into a steady habit of committing and pushing as I worked, so the version in GitHub always matched what I had locally. That way anyone pulling the project down was starting from current files instead of chasing whatever was newest on my end."
        }
      ],
      metrics: [],
      lessons:
        "The big takeaway here was learning to use GitHub in a team setting. I'd only ever used it solo, where I was the only person touching the files, so it was genuinely interesting to see how collaboration works once a repo has to serve a whole team — and to be part of that shift early on at Radancy."
    }
  },
  {
    id: 6,
    slug: "petco-careers",
    lastmod: "2026-06-04",
    title: "Petco Career Hub",
    description: "A talent acquisition site built using HTML, SCSS, JavaScript, Razor and Git/Github.",
    image: "/projects/project-petco.png",
    tags: ["HTML", "SCSS", "JavaScript", "Razor", "Git/Github"],
    demoUrl: "https://careers.petco.com/",
    caseStudy: {
      role: "Front-End Developer, Radancy (fka TMP Worldwide)",
      dates: "February 2025 – May 2025",
      overview:
        "Petco needed a career site where candidates could search for open positions and learn more about the company and the roles it offers. I worked on the front-end build at Radancy (formerly TMP Worldwide) alongside a second developer on the engagement.",
      challenges: [
        {
          title: "Two developers, one GitHub repo",
          body: "This was the first project where I shared the front-end build with another developer while we both pushed to the same GitHub repo. The risk was obvious — without a plan, we could easily overwrite each other's work and lose progress on either side."
        }
      ],
      solutions: [
        {
          title: "Branching to stay in our own lanes",
          body: "This is where branching came into play. We each worked on our own branch instead of pushing straight to a shared one, which kept our changes separate until they were ready to come together. It worked out cleanly — we stayed in our own lanes and never stepped on each other's work."
        }
      ],
      metrics: [],
      lessons:
        "The big takeaway here was getting to work alongside another developer and learning how to use branches within GitHub. After using Git solo and then on a team where I was still the only one touching the files, this was the first time the workflow had to actually keep two people from colliding — and branching turned out to be exactly the tool for that."
    }
  },
  {
    id: 7,
    slug: "santander-careers",
    lastmod: "2026-06-04",
    title: "Santander Career Hub",
    description: "A talent acquisition site built using HTML, SCSS, JavaScript, Razor and AOS - Animate On Scroll.",
    image: "/projects/project-santander.png",
    tags: ["HTML", "SCSS", "JavaScript", "Razor", "AOS - Animate On Scroll"],
    demoUrl: "https://www.santandercareers.com/",
    caseStudy: {
      role: "Front-End Developer, Radancy (fka TMP Worldwide)",
      dates: "May 2021 – July 2021",
      overview:
        "Santander needed a career site where candidates could search for open positions and learn more about the company and the roles it offers. I owned the front-end build at Radancy (formerly TMP Worldwide) as the sole developer on the engagement.",
      challenges: [
        {
          title: "Content lagging behind the build",
          body: "The biggest obstacle was getting the real content for the pages. The client was going through internal changes, which caused copy and imagery to lag behind the build schedule. Waiting on it would have put the launch date at risk."
        }
      ],
      solutions: [
        {
          title: "Build against placeholders, swap in real content later",
          body: "I built out the pages with placeholder images and Lorem Ipsum text so the structure and layout could move forward without the final copy. When the real content came over, it was just a matter of dropping the actual image or text into a slot that was already built — no rework, no slipped deadline."
        }
      ],
      metrics: [],
      lessons:
        "The big takeaway here was learning how to keep the ball rolling on a project without moving the due date. Missing content doesn't have to stall the build — laying in placeholders kept the work progressing, and swapping in the real thing later was the easy part."
    }
  },
  {
    id: 8,
    slug: "synopsys-careers",
    lastmod: "2026-06-04",
    title: "Synopsys Career Hub",
    description: "A talent acquisition site built using HTML, SCSS, JavaScript, Razor, Slick Slider and Reveal.",
    image: "/projects/project-synopsys.png",
    tags: ["HTML", "SCSS", "JavaScript", "Razor", "Slick Slider", "Reveal"],
    demoUrl: "https://careers.synopsys.com/",
    caseStudy: {
      role: "Front-End Developer, Radancy (fka TMP Worldwide)",
      dates: "June 2019 – August 2019",
      overview:
        "Synopsys needed a career site where candidates could search for open positions and learn more about the company and the roles it offers. I owned the front-end build at Radancy (formerly TMP Worldwide) as the dedicated developer on the engagement.",
      challenges: [
        {
          title: "A data-driven slider on the home page",
          body: "The biggest obstacle was the slider toward the bottom of the home page. The slider itself was built on Slick Slider, but each slide had to pull the number of open roles in a given country through Razor — and that wasn't a small task. I had to make sure the correct country code was being pulled in for every country represented in the slider."
        }
      ],
      solutions: [
        {
          title: "Slick Slider for the UI, careful Razor wiring for the data",
          body: "Slick Slider handled the slider mechanics and made that part more approachable. The real work was the Razor side — mapping each slide to the right country code so the open-role counts lined up with the correct country, and verifying each one pulled the number it was supposed to."
        }
      ],
      metrics: [],
      lessons:
        "The big takeaway here was that working with Razor can be a daunting task, mostly because there isn't much documentation out there to lean on when you get stuck. You end up relying on careful testing and what you can piece together yourself rather than a reference to look it up in."
    }
  },
  {
    id: 9,
    slug: "ups-careers",
    lastmod: "2026-06-04",
    title: "UPS Career Hub",
    description: "A talent acquisition site built using HTML, SASS, JavaScript and Razor.",
    image: "/projects/project-ups.png",
    tags: ["HTML", "SCSS", "JavaScript", "Razor", "Swiper", "Fancybox"],
    demoUrl: "https://www.jobs-ups.com/us/en/",
    caseStudy: {
      role: "Front-End Developer, Radancy (fka TMP Worldwide)",
      dates: "January 2024 – July 2024",
      overview:
        "UPS needed a career site where candidates could search for open positions and learn more about the company and the roles it offers. I owned the front-end build at Radancy (formerly TMP Worldwide), working alongside the broader project team on the engagement.",
      challenges: [
        {
          title: "Rebuilding the entire site mid-project",
          body: "The biggest obstacle was having to rebuild the whole website. The person at UPS overseeing the build left the company toward the end of the project, and once their replacement settled in, they wanted the entire site rebuilt with a different look and feel. That's a major change to absorb late in an engagement."
        }
      ],
      solutions: [
        {
          title: "Reset the timeline, then rebuild from the new designs",
          body: "To take on a change that size, we got the client to agree to extend the project due date. Once we'd settled on a new deadline, I was tasked with rebuilding the site from the new designs — essentially a second build on top of the first."
        }
      ],
      metrics: [
        { value: "Site of the Year", label: "Radancy company award" },
        { value: "Full rebuild", label: "Site rebuilt from new designs mid-project" }
      ],
      lessons:
        "The biggest takeaway here was that clients can change their minds at any point in a project, and it's up to us as a team to adapt to what they need. We pulled it off, and the site went on to win Site of the Year within the company."
    }
  }
]

export const caseStudyProjects = projects.filter(p => p.slug)

export const getProjectBySlug = slug => projects.find(p => p.slug === slug)
