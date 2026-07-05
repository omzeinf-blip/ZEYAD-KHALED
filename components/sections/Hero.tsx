"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiGreensock,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import AuroraBackground from "@/components/ui/AuroraBackground";
import MagneticButton from "@/components/ui/MagneticButton";
import AnimatedStat from "@/components/ui/AnimatedStat";
import LaptopShowcase from "@/components/sections/LaptopShowcase";
import FloatingTechCards from "@/components/sections/FloatingTechCards";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.07 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

const stats = [
  { value: "4+", label: "Premium Projects" },
  { value: "100%", label: "Responsive" },
  { value: "95+", label: "Lighthouse Score" },
  { value: "24/7", label: "Available" },
];

const badges = [
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiReact, label: "React" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: SiFramer, label: "Framer Motion" },
  { icon: SiGreensock, label: "GSAP" },
  { icon: SiGithub, label: "GitHub" },
  { icon: SiVercel, label: "Vercel" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-32 pb-20"
    >
      <AuroraBackground />

      <div className="relative mx-auto w-full max-w-container px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          {/* Left column */}
          <div>
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="glass-surface inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-medium text-text-secondary"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-state-success opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-state-success" />
              </span>
              Available for Freelance
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-7 font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary text-balance sm:text-5xl lg:text-[3.4rem]"
            >
              I build premium digital experiences that convert visitors into
              customers.
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg"
            >
              I help startups, businesses and brands create fast, modern and
              visually stunning websites that improve trust, user experience
              and conversions.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="#work" variant="primary">
                View My Work
              </MagneticButton>
              <MagneticButton href="#contact" variant="secondary">
                Hire Me
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-16 grid max-w-lg grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-x-4"
            >
              {stats.map((s) => (
                <AnimatedStat key={s.label} value={s.value} label={s.label} />
              ))}
            </motion.div>
          </div>

          {/* Right column — laptop showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative"
          >
            <FloatingTechCards />
            <LaptopShowcase />
          </motion.div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-24 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 border-t border-white/5 pt-10"
        >
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex items-center gap-2 text-text-muted transition-colors hover:text-text-primary"
            >
              <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:text-accent-secondary" />
              <span className="text-xs font-medium">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[11px] uppercase tracking-[0.2em] text-text-muted">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-white/15 p-1"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
