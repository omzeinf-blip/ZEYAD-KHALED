import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { FiArrowUpRight, FiGithub, FiArrowLeft } from "react-icons/fi";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import Navbar from "@/components/sections/Navbar";
import MagneticButton from "@/components/ui/MagneticButton";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectGallery from "@/components/sections/ProjectGallery";
import ProjectNav from "@/components/sections/ProjectNav";
import AuroraBackground from "@/components/ui/AuroraBackground";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.seoTitle,
    description: project.seoDescription,
    openGraph: {
      title: project.seoTitle,
      description: project.seoDescription,
      images: [{ url: project.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.seoTitle,
      description: project.seoDescription,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <>
      <Navbar />
      <main className="relative bg-bg pt-32">
        {/* Hero banner */}
        <section className="relative overflow-hidden pb-16">
          <AuroraBackground intensity="subtle" />
          <div className="relative mx-auto max-w-container px-6 lg:px-8">
            <Link
              href="/#work"
              data-cursor="pointer"
              className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              <FiArrowLeft className="h-4 w-4" /> Back to work
            </Link>

            <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-text-muted">
                  <span>{project.id}</span>
                  <span className="h-px w-8 bg-white/15" />
                  <span>{project.category}</span>
                  <span className="h-px w-8 bg-white/15" />
                  <span>{project.year}</span>
                </div>
                <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
              </div>

              <div className="flex flex-wrap gap-4">
                <MagneticButton href={project.liveDemo} variant="primary" external>
                  View Live Demo <FiArrowUpRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton href={project.github} variant="secondary" external>
                  <FiGithub className="h-4 w-4" /> GitHub
                </MagneticButton>
              </div>
            </div>

            {/* Large hero screenshot */}
            <div className="relative mt-14 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]">
              <Image
                src={project.coverImage}
                alt={`${project.title} — ${project.category}`}
                fill
                sizes="(max-width: 1440px) 100vw, 1440px"
                priority
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-container gap-12 px-6 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:px-8">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-text-primary">
                Overview
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                {project.description}
              </p>

              <h3 className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                Technologies
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="glass-surface rounded-full px-3.5 py-1.5 text-xs font-medium text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                Status
              </h3>
              <div className="mt-3 inline-flex items-center gap-2 text-sm text-text-secondary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-state-success opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-state-success" />
                </span>
                {project.status}
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="font-heading text-xl font-semibold text-text-primary">
                  The Challenge
                </h3>
                <p className="mt-3 text-base leading-relaxed text-text-secondary">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-text-primary">
                  The Solution
                </h3>
                <p className="mt-3 text-base leading-relaxed text-text-secondary">
                  {project.solution}
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-text-primary">
                  Key Features
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-base text-text-secondary"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-text-primary">
                  Results
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {project.results.map((result) => (
                    <li
                      key={result}
                      className="flex items-start gap-2.5 text-base text-text-secondary"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent-secondary" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-container px-6 lg:px-8">
            <SectionHeading
              eyebrow="Gallery"
              heading="A closer look"
              description="Every detail — from layout to motion — was designed to feel deliberate."
            />
            <div className="mt-12">
              <ProjectGallery images={project.gallery} alt={project.title} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-container px-6 lg:px-8">
            <div className="glass-surface flex flex-col items-center gap-6 rounded-3xl p-10 text-center sm:p-16">
              <h2 className="font-heading text-2xl font-semibold text-text-primary sm:text-3xl">
                Want something like this for your business?
              </h2>
              <p className="max-w-xl text-text-secondary">
                I help startups, businesses and brands create fast, modern and
                visually stunning websites that improve trust, user experience
                and conversions.
              </p>
              <MagneticButton href="/#contact" variant="primary">
                Let&apos;s Build Something
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* Prev / Next */}
        <section className="pb-24">
          <div className="mx-auto max-w-container px-6 lg:px-8">
            <ProjectNav prev={prev} next={next} />
          </div>
        </section>
      </main>
    </>
  );
}
