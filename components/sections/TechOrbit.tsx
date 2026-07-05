"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFramer,
  SiGreensock,
  SiGit,
  SiGithub,
  SiVercel,
  SiHtml5,
  SiCss,
  SiJavascript,
} from "react-icons/si";
import SectionHeading from "@/components/ui/SectionHeading";

const orbitItems = [
  { icon: SiReact, label: "React", radius: 150, angle: 0, duration: 24 },
  { icon: SiTypescript, label: "TypeScript", radius: 150, angle: 60, duration: 24 },
  { icon: SiTailwindcss, label: "Tailwind CSS", radius: 150, angle: 120, duration: 24 },
  { icon: SiNodedotjs, label: "Node.js", radius: 150, angle: 180, duration: 24 },
  { icon: SiFramer, label: "Framer Motion", radius: 150, angle: 240, duration: 24 },
  { icon: SiGreensock, label: "GSAP", radius: 150, angle: 300, duration: 24 },
  { icon: SiGit, label: "Git", radius: 230, angle: 30, duration: 34 },
  { icon: SiGithub, label: "GitHub", radius: 230, angle: 90, duration: 34 },
  { icon: SiVercel, label: "Vercel", radius: 230, angle: 150, duration: 34 },
  { icon: SiHtml5, label: "HTML", radius: 230, angle: 210, duration: 34 },
  { icon: SiCss, label: "CSS", radius: 230, angle: 270, duration: 34 },
  { icon: SiJavascript, label: "JavaScript", radius: 230, angle: 330, duration: 34 },
];

export default function TechOrbit() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden py-24 lg:py-40">
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technology"
          heading="Tools I build with"
          align="center"
          description="A modern, production-grade stack chosen for performance, developer experience and long-term maintainability."
        />

        <div className="relative mx-auto mt-20 flex h-[520px] w-full max-w-xl items-center justify-center lg:mt-24">
          {/* orbit rings */}
          <div className="absolute h-[300px] w-[300px] rounded-full border border-white/5" />
          <div className="absolute h-[460px] w-[460px] rounded-full border border-white/5" />

          {/* center: Next.js */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass-surface relative z-10 flex h-24 w-24 items-center justify-center rounded-full shadow-[0_0_50px_rgba(108,140,255,0.25)]"
          >
            <SiNextdotjs className="h-10 w-10 text-text-primary" />
          </motion.div>

          {orbitItems.map(({ icon: Icon, label, radius, angle, duration }) => (
            <motion.div
              key={label}
              className="absolute left-1/2 top-1/2 h-0 w-0"
              style={{ transformOrigin: "0 0" }}
              animate={{ rotate: 360 }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "linear",
                delay: -(angle / 360) * duration,
              }}
            >
              <div
                className="absolute"
                style={{
                  left: radius,
                  top: 0,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* counter-rotate so the icon stays upright */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    ease: "linear",
                    delay: -(angle / 360) * duration,
                  }}
                  onMouseEnter={() => setHovered(label)}
                  onMouseLeave={() => setHovered(null)}
                  className="group relative flex h-11 w-11 items-center justify-center rounded-full glass-surface transition-all duration-300 hover:scale-125 hover:border-accent-secondary/40"
                >
                  <Icon className="h-5 w-5 text-text-secondary transition-colors duration-300 group-hover:text-accent-secondary" />
                  <span
                    className={`pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-card px-2.5 py-1 text-xs text-text-primary shadow-lg transition-opacity duration-200 ${
                      hovered === label ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {label}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
