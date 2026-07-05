"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";

const CYCLE_MS = 5000;

export default function LaptopShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse-driven parallax tilt.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const tick = 50;
    let elapsed = 0;
    const interval = setInterval(() => {
      elapsed += tick;
      setProgress((elapsed % CYCLE_MS) / CYCLE_MS);
      if (elapsed >= CYCLE_MS) {
        elapsed = 0;
        setActiveIndex((i) => (i + 1) % projects.length);
      }
    }, tick);
    return () => clearInterval(interval);
  }, []);

  const active = projects[activeIndex] ?? projects[0]!;

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      <motion.div
        style={{ rotateX, rotateY, transformPerspective: 1400 }}
        className="relative"
      >
        {/* Laptop body */}
        <div className="relative rounded-[18px] border border-white/10 bg-gradient-to-b from-[#1B2230] to-[#131923] p-3 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]">
          {/* Browser chrome */}
          <div className="rounded-[10px] overflow-hidden border border-white/5 bg-[#0E1117]">
            <div className="flex items-center gap-2 border-b border-white/5 bg-[#171E29] px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF6159]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              </div>
              <div className="ml-3 flex-1 rounded-full bg-white/5 px-3 py-1 text-[11px] text-text-muted truncate">
                {active.liveDemo.replace("https://", "")}
              </div>
            </div>
            <div className="relative aspect-[16/10] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.slug}
                  initial={{ opacity: 0, scale: 1.02, filter: "blur(5px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.99, filter: "blur(5px)" }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.coverImage}
                    alt={`${active.title} — ${active.category}`}
                    fill
                    sizes="(max-width: 768px) 90vw, 640px"
                    className="object-cover object-top"
                    priority={activeIndex === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117]/40 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        {/* Base / hinge */}
        <div className="mx-auto h-3 w-[85%] rounded-b-2xl bg-gradient-to-b from-[#1B2230] to-[#0E1117] border border-t-0 border-white/10" />
      </motion.div>

      {/* Ambient glow beneath the laptop */}
      <div className="absolute -inset-x-10 top-1/2 -z-10 h-40 rounded-full bg-accent-primary/20 blur-[100px]" />

      {/* Project indicator */}
      <div className="mt-10 glass-surface rounded-2xl px-6 py-5">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-text-muted">
          <span>Currently Showcasing</span>
          <span>
            {active.id} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.slug}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2"
          >
            <h3 className="font-heading text-xl font-semibold text-text-primary">
              {active.title}
            </h3>
            <p className="text-sm text-text-secondary">{active.category}</p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-white/5">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"
            style={{ width: `${progress * 100}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
}
