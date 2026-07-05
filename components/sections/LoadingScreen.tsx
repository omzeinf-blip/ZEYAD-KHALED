"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AuroraBackground from "@/components/ui/AuroraBackground";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 700;

    function step(now: number) {
      const t = Math.min((now - start) / duration, 1);
      setProgress(Math.round(t * 100));
      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => setDone(true), 100);
      }
    }
    requestAnimationFrame(step);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg"
        >
          <AuroraBackground intensity="subtle" />
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative font-heading text-xl font-semibold uppercase tracking-[0.3em] text-text-primary sm:text-2xl"
          >
            <span className="drop-shadow-[0_0_30px_rgba(108,140,255,0.5)]">
              Zeyad Khaled
            </span>
          </motion.div>
          <div className="relative mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="relative mt-4 text-xs tracking-[0.2em] text-text-muted">
            {progress}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
