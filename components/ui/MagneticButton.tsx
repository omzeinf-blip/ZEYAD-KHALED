"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  external = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    setPos({ x, y });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const id = Date.now();
      setRipples((r) => [
        ...r,
        { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
      ]);
      setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 600);
    }
    onClick?.();
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 focus-ring";

  const variants = {
    primary:
      "bg-gradient-to-r from-accent-primary to-accent-purple text-[#0E1117] shadow-[0_0_30px_rgba(108,140,255,0.35)] hover:shadow-[0_0_45px_rgba(108,140,255,0.5)]",
    secondary:
      "glass-surface text-text-primary hover:border-accent-primary/40",
    ghost: "text-text-secondary hover:text-text-primary",
  };

  const Content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 220, damping: 15, mass: 0.3 }}
      data-cursor="pointer"
      className={cn(base, variants[variant], className)}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/30"
          style={{
            left: r.x,
            top: r.y,
            width: 10,
            height: 10,
            transform: "translate(-50%, -50%)",
            animation: "ripple 0.6s ease-out forwards",
          }}
        />
      ))}
      <style jsx>{`
        @keyframes ripple {
          to {
            width: 220px;
            height: 220px;
            opacity: 0;
          }
        }
      `}</style>
    </motion.div>
  );

  if (href) {
    // In-page hash anchors (#work) and external links use a plain <a>;
    // real internal routes (e.g. /projects/slug) go through next/link
    // for client-side transitions and prefetching.
    const isInternalRoute = !external && href.startsWith("/") && !href.startsWith("/#");

    if (isInternalRoute) {
      return (
        <Link href={href} className="inline-block">
          {Content}
        </Link>
      );
    }

    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="inline-block"
      >
        {Content}
      </a>
    );
  }

  return Content;
}
