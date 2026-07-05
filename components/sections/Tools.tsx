"use client";

import { motion } from "framer-motion";
import { VscVscode } from "react-icons/vsc";
import {
  SiGithub,
  SiVercel,
  SiFigma,
  SiPostman,
  SiGooglechrome,
} from "react-icons/si";
import SectionHeading from "@/components/ui/SectionHeading";

const tools = [
  { icon: VscVscode, label: "VS Code" },
  { icon: SiGithub, label: "GitHub" },
  { icon: SiVercel, label: "Vercel" },
  { icon: SiFigma, label: "Figma" },
  { icon: SiPostman, label: "Postman" },
  { icon: SiGooglechrome, label: "Chrome DevTools" },
];

export default function Tools() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <SectionHeading
          eyebrow="Workflow"
          heading="Daily tools"
          align="center"
          description="The everyday toolkit behind every build, from design to deployment."
        />

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4 lg:mt-16 lg:gap-5">
          {tools.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-surface flex items-center gap-2.5 rounded-full px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent-secondary/30"
            >
              <Icon className="h-4.5 w-4.5 text-text-secondary transition-colors duration-300 group-hover:text-accent-secondary" />
              <span className="text-sm font-medium text-text-secondary transition-colors duration-300 group-hover:text-text-primary">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
