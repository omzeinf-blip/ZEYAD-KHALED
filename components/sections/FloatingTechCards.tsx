"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiReact,
  SiGreensock,
} from "react-icons/si";

const items = [
  { icon: SiNextdotjs, label: "Next.js", top: "6%", left: "-6%", delay: 0 },
  { icon: SiReact, label: "React", top: "70%", left: "-10%", delay: 0.6 },
  { icon: SiTypescript, label: "TypeScript", top: "12%", left: "96%", delay: 1.1 },
  { icon: SiTailwindcss, label: "Tailwind", top: "55%", left: "100%", delay: 1.6 },
  { icon: SiFramer, label: "Framer Motion", top: "88%", left: "40%", delay: 2.1 },
  { icon: SiGreensock, label: "GSAP", top: "-4%", left: "45%", delay: 2.6 },
];

export default function FloatingTechCards() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      {items.map(({ icon: Icon, label, top, left, delay }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay * 0.3 + 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ top, left, animationDelay: `${delay}s` }}
          className="absolute animate-float glass-surface flex items-center gap-2 rounded-xl px-3.5 py-2.5 shadow-lg"
        >
          <Icon className="h-4 w-4 text-accent-secondary" />
          <span className="text-xs font-medium text-text-secondary whitespace-nowrap">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
