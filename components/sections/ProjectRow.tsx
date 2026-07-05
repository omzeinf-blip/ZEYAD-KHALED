"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { Project } from "@/types/project";
import BrowserMockup from "@/components/ui/BrowserMockup";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ProjectRow({
  project,
  reversed,
  index,
}: {
  project: Project;
  reversed: boolean;
  index: number;
}) {
  return (
    <div
      className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
        reversed ? "" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: reversed ? 24 : -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={reversed ? "lg:order-2" : ""}
      >
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="pointer"
          className="block"
        >
          <BrowserMockup
            src={project.coverImage}
            alt={`${project.title} — ${project.category}`}
            url={project.liveDemo.replace("https://", "")}
            priority={index === 0}
          />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reversed ? -24 : 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={reversed ? "lg:order-1" : ""}
      >
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-text-muted">
          <span>{project.id}</span>
          <span className="h-px w-8 bg-white/15" />
          <span>{project.category}</span>
        </div>

        <h3 className="mt-4 font-heading text-3xl font-semibold text-text-primary sm:text-4xl">
          {project.title}
        </h3>

        <p className="mt-4 text-base leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="glass-surface rounded-full px-3.5 py-1.5 text-xs font-medium text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:text-accent-secondary hover:shadow-[0_0_16px_rgba(126,231,255,0.2)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-6 space-y-2">
          {project.features.slice(0, 3).map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm text-text-secondary"
            >
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-primary" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <MagneticButton href={project.liveDemo} variant="primary" external>
            View Live Demo <FiArrowUpRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href={project.github} variant="secondary" external>
            <FiGithub className="h-4 w-4" /> GitHub
          </MagneticButton>
          <MagneticButton href={`/projects/${project.slug}`} variant="ghost">
            View Case Study <FiArrowUpRight className="h-3.5 w-3.5" />
          </MagneticButton>
        </div>
      </motion.div>
    </div>
  );
}
