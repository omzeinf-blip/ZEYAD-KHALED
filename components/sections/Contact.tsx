"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiExternalLink, FiCopy, FiCheck, FiDownload } from "react-icons/fi";
import { SiFiverr } from "react-icons/si";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";

const EMAIL = "omzeinf@gmail.com";

const contactCards = [
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/omzeinf-blip",
    href: "https://github.com/omzeinf-blip",
  },
  {
    icon: SiFiverr,
    label: "Fiverr",
    value: "fiverr.com/runwayinf",
    href: "https://www.fiverr.com/runwayinf",
  },
  {
    icon: FiExternalLink,
    label: "Contra",
    value: "contra.com/zeyadkhaled",
    href: "https://contra.com/zeyadkhaled",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — fail silently, the email is still
      // visible and selectable on the card.
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-40">
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          heading="Let's build something exceptional."
          description="I'm always interested in working on premium web experiences."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-14 max-w-md lg:mt-16"
        >
          <button
            onClick={handleCopy}
            data-cursor="pointer"
            className="group glass-surface flex w-full items-center justify-between rounded-2xl p-5 transition-colors hover:border-accent-primary/30 focus-ring"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-accent-secondary">
                <FiMail className="h-4.5 w-4.5" />
              </div>
              <span className="text-sm font-medium text-text-primary">
                {EMAIL}
              </span>
            </div>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-text-secondary transition-colors group-hover:text-accent-secondary">
              {copied ? (
                <FiCheck className="h-4 w-4 text-state-success" />
              ) : (
                <FiCopy className="h-4 w-4" />
              )}
            </span>
          </button>
        </motion.div>

        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          {contactCards.map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-surface flex flex-col items-center gap-2 rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary/30"
            >
              <Icon className="h-5 w-5 text-text-secondary transition-colors group-hover:text-accent-secondary" />
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted">
                {label}
              </span>
              <span className="text-sm text-text-secondary">{value}</span>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="/resume.pdf" variant="secondary" external>
            <FiDownload className="h-4 w-4" /> Download Resume
          </MagneticButton>
          <MagneticButton href={`mailto:${EMAIL}`} variant="primary">
            Hire Me
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
