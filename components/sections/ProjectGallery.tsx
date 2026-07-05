"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ProjectGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <motion.button
            key={src + i}
            onClick={() => setOpenIndex(i)}
            data-cursor="pointer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10"
          >
            <Image
              src={src}
              alt={`${alt} — screenshot ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-top transition-transform duration-500 ease-out-expo group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117]/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-[#0E1117]/90 backdrop-blur-md p-6"
            onClick={() => setOpenIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={images[openIndex]!}
                alt={`${alt} — screenshot ${openIndex + 1}`}
                fill
                sizes="90vw"
                className="object-cover object-top"
              />
            </motion.div>

            <button
              onClick={() => setOpenIndex(null)}
              aria-label="Close gallery"
              data-cursor="pointer"
              className="glass-surface absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full text-text-primary focus-ring"
            >
              <FiX className="h-5 w-5" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenIndex((i) => ((i ?? 0) - 1 + images.length) % images.length);
                  }}
                  aria-label="Previous image"
                  data-cursor="pointer"
                  className="glass-surface absolute left-6 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-text-primary focus-ring"
                >
                  <FiChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenIndex((i) => ((i ?? 0) + 1) % images.length);
                  }}
                  aria-label="Next image"
                  data-cursor="pointer"
                  className="glass-surface absolute right-6 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-text-primary focus-ring"
                >
                  <FiChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
