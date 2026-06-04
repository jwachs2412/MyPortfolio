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
    title: "Dell Technologies Career Hub",
    description: "A talent acquisition site built using HTML, SCSS, JavaScript, Razor and Slick Slider.",
    image: "/projects/project-dell-technologies.png",
    tags: ["HTML", "SCSS", "JavaScript", "Razor", "Slick Slider"],
    demoUrl: "https://jobs.dell.com/en",
    caseStudy: {
      role: null,
      dates: null,
      overview: null,
      challenges: [],
      solutions: [],
      metrics: [],
      lessons: null
    }
  },
  {
    id: 5,
    slug: "nva-careers",
    title: "National Veterinarians Association Career Hub",
    description: "A talent acquisition site built using HTML, SCSS, JavaScript, Razor and Git/Github.",
    image: "/projects/project-nva-general-practice.png",
    tags: ["HTML", "SCSS", "JavaScript", "Razor", "Git/Github"],
    demoUrl: "https://careers.nva.com/",
    caseStudy: {
      role: null,
      dates: null,
      overview: null,
      challenges: [],
      solutions: [],
      metrics: [],
      lessons: null
    }
  },
  {
    id: 6,
    slug: "petco-careers",
    title: "Petco Career Hub",
    description: "A talent acquisition site built using HTML, SCSS, JavaScript, Razor and Git/Github.",
    image: "/projects/project-petco.png",
    tags: ["HTML", "SCSS", "JavaScript", "Razor", "Git/Github"],
    demoUrl: "https://careers.petco.com/",
    caseStudy: {
      role: null,
      dates: null,
      overview: null,
      challenges: [],
      solutions: [],
      metrics: [],
      lessons: null
    }
  },
  {
    id: 7,
    slug: "santander-careers",
    title: "Santander Career Hub",
    description: "A talent acquisition site built using HTML, SCSS, JavaScript, Razor and AOS - Animate On Scroll.",
    image: "/projects/project-santander.png",
    tags: ["HTML", "SCSS", "JavaScript", "Razor", "AOS - Animate On Scroll"],
    demoUrl: "https://www.santandercareers.com/",
    caseStudy: {
      role: null,
      dates: null,
      overview: null,
      challenges: [],
      solutions: [],
      metrics: [],
      lessons: null
    }
  },
  {
    id: 8,
    slug: "synopsys-careers",
    title: "Synopsys Career Hub",
    description: "A talent acquisition site built using HTML, SCSS, JavaScript, Razor and Reveal.",
    image: "/projects/project-synopsys.png",
    tags: ["HTML", "SCSS", "JavaScript", "Razor", "Reveal"],
    demoUrl: "https://careers.synopsys.com/",
    caseStudy: {
      role: null,
      dates: null,
      overview: null,
      challenges: [],
      solutions: [],
      metrics: [],
      lessons: null
    }
  },
  {
    id: 9,
    slug: "ups-careers",
    title: "UPS Career Hub",
    description: "A talent acquisition site built using HTML, SASS, JavaScript and Razor.",
    image: "/projects/project-ups.png",
    tags: ["HTML", "SCSS", "JavaScript", "Razor", "Swiper", "Fancybox"],
    demoUrl: "https://www.jobs-ups.com/us/en/",
    caseStudy: {
      role: null,
      dates: null,
      overview: null,
      challenges: [],
      solutions: [],
      metrics: [],
      lessons: null
    }
  }
]

export const caseStudyProjects = projects.filter(p => p.slug)

export const getProjectBySlug = slug => projects.find(p => p.slug === slug)
