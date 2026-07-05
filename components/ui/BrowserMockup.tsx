"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function BrowserMockup({
  src,
  alt,
  url,
  priority = false,
}: {
  src: string;
  alt: string;
  url: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 18 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1400 }}
      className="group relative"
    >
      <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#1B2230] to-[#131923] p-2.5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)] transition-shadow duration-300 group-hover:shadow-[0_35px_90px_-15px_rgba(108,140,255,0.25)]">
        <div className="rounded-xl overflow-hidden border border-white/5 bg-[#0E1117]">
          <div className="flex items-center gap-2 border-b border-white/5 bg-[#171E29] px-3.5 py-2.5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF6159]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            </div>
            <div className="ml-2 flex-1 rounded-full bg-white/5 px-3 py-1 text-[11px] text-text-muted truncate">
              {url}
            </div>
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 90vw, 640px"
              className="object-cover object-top transition-transform duration-500 ease-out-expo group-hover:scale-[1.03]"
              priority={priority}
            />
          </div>
        </div>
      </div>
      {/* ambient glow */}
      <div className="absolute -inset-6 -z-10 rounded-[28px] bg-accent-primary/10 opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}
