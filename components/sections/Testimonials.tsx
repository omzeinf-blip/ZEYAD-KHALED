"use client";

import { motion } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          heading="Client feedback"
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="glass-surface mx-auto mt-14 flex max-w-xl flex-col items-center gap-4 rounded-3xl p-10 text-center lg:mt-16"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-accent-secondary">
            <FiMessageSquare className="h-5 w-5" />
          </div>
          <p className="text-base leading-relaxed text-text-secondary">
            Client testimonials will appear here after completing future
            freelance projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
