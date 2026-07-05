"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 320, mass: 0.4 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  // Glow trails slightly behind the core dot for a "lit" feel.
  const glowX = useSpring(cursorX, { damping: 40, stiffness: 160, mass: 0.6 });
  const glowY = useSpring(cursorY, { damping: 40, stiffness: 160, mass: 0.6 });

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    setIsTouch(!hasFinePointer);
    if (!hasFinePointer) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(
        !!target.closest(
          'a, button, [role="button"], input, textarea, [data-cursor="pointer"]'
        )
      );
    };

    const hide = () => setIsVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouch) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] hidden md:block"
      aria-hidden="true"
    >
      <motion.div
        className="fixed left-0 top-0 rounded-full"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          width: isPointer ? 64 : 40,
          height: isPointer ? 64 : 40,
          background:
            "radial-gradient(circle, rgba(108,140,255,0.35) 0%, rgba(108,140,255,0) 70%)",
          opacity: isVisible ? 1 : 0,
          transition: "width 0.3s ease-out-expo, height 0.3s ease-out-expo, opacity 0.3s ease",
        }}
      />
      <motion.div
        className="fixed left-0 top-0 rounded-full border border-white/25"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: isPointer ? 10 : 6,
          height: isPointer ? 10 : 6,
          backgroundColor: isPointer ? "#6C8CFF" : "#F7F8FB",
          opacity: isVisible ? 1 : 0,
          transition: "width 0.25s ease-out-expo, height 0.25s ease-out-expo, background-color 0.25s ease, opacity 0.25s ease",
        }}
      />
    </div>
  );
}
