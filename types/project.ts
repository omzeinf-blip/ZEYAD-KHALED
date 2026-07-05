export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  year: string;
  status: "Live" | "In Development";
  coverImage: string;
  gallery: string[];
  technologies: string[];
  features: string[];
  liveDemo: string;
  github: string;
  challenge: string;
  solution: string;
  results: string[];
  seoTitle: string;
  seoDescription: string;
}
