import { Project } from "@/types/project";

// Cover/gallery images point to /public/projects/{slug}/*.
// Drop the real screenshots there — the paths below are already wired
// into the Hero laptop showcase, Featured Work section and case study pages.
export const projects: Project[] = [
  {
    id: "01",
    slug: "prime-state",
    title: "Prime State",
    category: "Luxury Real Estate Platform",
    description:
      "A premium real estate experience designed for luxury agencies, featuring immersive UI, responsive layouts, interactive property browsing, modern animations and optimized performance.",
    year: "2024",
    status: "Live",
    coverImage: "/projects/prime-state/cover.png",
    // Only the hero screenshot has been supplied so far — gallery will
    // expand once additional shots (properties grid, listing detail, etc.)
    // are provided.
    gallery: ["/projects/prime-state/cover.png"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Interactive property browsing with map-based filtering",
      "Immersive property galleries with parallax reveals",
      "Fully responsive luxury layout system",
      "Optimized Core Web Vitals across every device",
    ],
    liveDemo: "https://prime-state-xi.vercel.app/",
    github: "https://github.com/omzeinf-blip/prime-state",
    challenge:
      "Luxury real estate buyers expect a browsing experience that feels as premium as the properties themselves, but most real estate sites load slowly and look generic.",
    solution:
      "Built a performance-first Next.js platform with editorial typography, restrained motion design and an interactive property explorer that keeps the focus on the listings.",
    results: [
      "Sub-second perceived load time on property pages",
      "Fully responsive across 12+ breakpoints",
      "Lighthouse performance score above 95",
    ],
    seoTitle: "Prime State — Luxury Real Estate Platform | Zeyad Khaled",
    seoDescription:
      "A premium real estate platform with immersive UI, interactive property browsing and optimized performance, built by Zeyad Khaled.",
  },
  {
    id: "02",
    slug: "lumina-dental",
    title: "Lumina Dental",
    category: "Luxury Dental Clinic Website",
    description:
      "A premium healthcare experience focused on trust, patient engagement, online appointments, modern branding, responsive design and elegant user journeys.",
    year: "2024",
    status: "Live",
    coverImage: "/projects/lumina-dental/cover.png",
    gallery: ["/projects/lumina-dental/cover.png"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Online appointment booking flow",
      "Trust-building patient journey design",
      "Modern clinical branding system",
      "Accessible, calming color and typography system",
    ],
    liveDemo: "https://lumina-dental-mu.vercel.app/",
    github: "https://github.com/omzeinf-blip/lumina-dental",
    challenge:
      "Dental clinics need to convert anxious visitors into booked patients, which means the site has to build trust within seconds, not just look nice.",
    solution:
      "Designed a warm, editorial healthcare experience with clear calls-to-action, a simplified booking flow and reassuring, high-contrast typography.",
    results: [
      "Streamlined booking journey in 3 steps",
      "100% responsive patient-facing experience",
      "Accessible contrast ratios throughout",
    ],
    seoTitle: "Lumina Dental — Luxury Dental Clinic Website | Zeyad Khaled",
    seoDescription:
      "A premium healthcare website focused on trust, patient engagement and online appointments, built by Zeyad Khaled.",
  },
  {
    id: "03",
    slug: "savore",
    title: "Savoré",
    category: "Luxury Restaurant Website",
    description:
      "A sophisticated restaurant website inspired by fine dining experiences, editorial layouts, immersive imagery, smooth interactions and premium branding.",
    year: "2024",
    status: "Live",
    coverImage: "/projects/savore/cover.png",
    gallery: ["/projects/savore/cover.png"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    features: [
      "Editorial, magazine-inspired menu presentation",
      "Immersive full-bleed imagery with parallax",
      "Reservation-focused conversion flow",
      "Smooth GSAP-driven scroll choreography",
    ],
    liveDemo: "https://savore-lemon.vercel.app/",
    github: "https://github.com/omzeinf-blip/Savore",
    challenge:
      "Fine dining brands need a digital presence that matches the atmosphere of the restaurant itself — most restaurant sites feel transactional rather than experiential.",
    solution:
      "Crafted an editorial, magazine-style layout with full-bleed photography, restrained motion and a reservation flow that never interrupts the atmosphere.",
    results: [
      "Editorial layout system reused across 6+ page types",
      "Smooth 60fps scroll interactions",
      "Fully responsive fine-dining experience",
    ],
    seoTitle: "Savoré — Luxury Restaurant Website | Zeyad Khaled",
    seoDescription:
      "A sophisticated restaurant website with editorial layouts, immersive imagery and premium branding, built by Zeyad Khaled.",
  },
  {
    id: "04",
    slug: "nexus-ai",
    title: "Nexus AI",
    category: "AI SaaS Landing Page",
    description:
      "A premium AI SaaS experience focused on startups, automation, analytics, interactive dashboards, modern UI and conversion optimization.",
    year: "2024",
    status: "Live",
    coverImage: "/projects/nexus-ai/cover.png",
    gallery: ["/projects/nexus-ai/cover.png"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Interactive product dashboard previews",
      "Conversion-optimized pricing and CTA sections",
      "Modern SaaS UI system with animated data visuals",
      "Fully responsive marketing site architecture",
    ],
    liveDemo: "https://nexus-ai-ytyo.vercel.app/",
    github: "https://github.com/omzeinf-blip/Nexus-AI",
    challenge:
      "AI SaaS products live or die on their landing page's ability to explain complex automation simply while still feeling cutting-edge.",
    solution:
      "Designed a dashboard-forward landing page that visualizes the product in action, paired with clear, benefit-driven copy and a frictionless conversion path.",
    results: [
      "Dashboard-first storytelling above the fold",
      "Clear multi-tier pricing presentation",
      "Optimized for fast Time to Interactive",
    ],
    seoTitle: "Nexus AI — AI SaaS Landing Page | Zeyad Khaled",
    seoDescription:
      "A premium AI SaaS landing page with interactive dashboards and conversion-focused design, built by Zeyad Khaled.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length]!;
  const next = projects[(index + 1) % projects.length]!;
  return { prev, next };
}
