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
    id: 3,
    slug: "boston-pizza-careers",
    title: "Boston Pizza Career Hub",
    description: "A talent acquisition site built using HTML, SCSS, JavaScript, Razor, Swiper and Fancybox.",
    image: "/projects/project-boston-pizza.png",
    tags: ["HTML", "SCSS", "JavaScript", "Razor", "Swiper", "Fancybox"],
    demoUrl: "https://careers.bostonpizza.ca/en",
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
