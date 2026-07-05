"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const timeline = [
  { year: "2024", label: "Started learning web development" },
  { year: "2024", label: "HTML, CSS & JavaScript fundamentals" },
  { year: "2024", label: "React & component-driven UI" },
  { year: "2025", label: "Next.js & TypeScript" },
  { year: "2025", label: "First freelance projects" },
  { year: "2025", label: "Luxury UI development" },
  { year: "2026", label: "Full stack development" },
  { year: "Today", label: "Building premium web experiences" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-40">
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="About"
              heading="Crafting premium digital experiences."
              description="I help businesses transform ideas into beautiful, high-performing digital products — combining engineering discipline with an obsessive attention to design detail."
            />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary"
            >
              Every project I take on is treated as a product, not a task —
              from the first wireframe to the last microinteraction. That
              means fast load times, clean and maintainable code, and a
              visual language that makes a brand feel more credible the
              moment someone lands on it.
            </motion.p>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-primary via-accent-purple to-transparent" />
            <ul className="space-y-8">
              {timeline.map((item, i) => (
                <motion.li
                  key={`${item.year}-${item.label}`}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative"
                >
                  <span className="absolute -left-8 top-1 h-3.5 w-3.5 rounded-full border-2 border-accent-primary bg-bg" />
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent-secondary">
                    {item.year}
                  </span>
                  <p className="mt-1 text-base text-text-primary">
                    {item.label}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
