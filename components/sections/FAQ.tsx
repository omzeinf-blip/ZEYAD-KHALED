"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "Most landing pages and marketing sites take 1–3 weeks depending on scope. Larger web applications or full redesigns typically run 3–6 weeks. I'll give you a firm timeline after our first call.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "Primarily Next.js, React, TypeScript, Tailwind CSS and Framer Motion — a modern, production-grade stack chosen for performance, maintainability and long-term scalability.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. I can work from your current site, brand assets, or a reference you like, and modernize the design, performance and code without starting from zero unnecessarily.",
  },
  {
    question: "Do you build fully responsive websites?",
    answer:
      "Every project is designed mobile-first and tested across breakpoints from 320px up to large desktop displays — no shrunk-down desktop layouts.",
  },
  {
    question: "Can you create dashboards or web applications?",
    answer:
      "Yes — beyond marketing sites, I build responsive, data-driven interfaces including dashboards, admin panels and interactive tools.",
  },
  {
    question: "Can you improve an existing website's performance?",
    answer:
      "Yes. I regularly audit and optimize Core Web Vitals, image delivery, bundle size and rendering strategy to bring Lighthouse scores above 90+.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" heading="Common questions" align="center" />

        <div className="mx-auto mt-14 max-w-2xl divide-y divide-white/5 lg:mt-16">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question} className="py-5">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  data-cursor="pointer"
                  className="flex w-full items-center justify-between gap-4 text-left focus-ring"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base font-medium text-text-primary sm:text-lg">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/5 text-text-secondary"
                  >
                    <FiPlus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 pr-10 text-sm leading-relaxed text-text-secondary">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
