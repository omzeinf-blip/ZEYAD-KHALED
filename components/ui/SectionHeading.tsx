"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
}) {
  const words = heading.split(" ");

  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent-secondary"
        >
          {eyebrow}
        </motion.span>
      )}
      <h2 className="font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-text-primary text-balance sm:text-4xl lg:text-5xl">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              delay: i * 0.04,
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mr-[0.28em] inline-block"
          >
            {word}
          </motion.span>
        ))}
      </h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className={`mt-5 max-w-2xl text-base text-text-secondary sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
