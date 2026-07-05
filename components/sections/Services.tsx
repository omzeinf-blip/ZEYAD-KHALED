"use client";

import { motion } from "framer-motion";
import {
  FiLayout,
  FiHome,
  FiCoffee,
  FiUser,
  FiCpu,
  FiSmartphone,
  FiCode,
  FiLayers,
  FiRefreshCw,
  FiZap,
  FiHeart,
  FiGrid,
} from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  { icon: FiLayout, title: "Luxury Landing Pages", description: "High-converting landing pages built to make premium brands feel premium online." },
  { icon: FiGrid, title: "Business Websites", description: "Fast, credible websites that turn visitors into leads and customers." },
  { icon: FiHome, title: "Real Estate Websites", description: "Immersive property browsing experiences for agencies and developers." },
  { icon: FiCoffee, title: "Restaurant Websites", description: "Editorial, atmosphere-driven sites for fine dining and hospitality brands." },
  { icon: FiHeart, title: "Dental & Healthcare Websites", description: "Trust-focused patient journeys with streamlined booking flows." },
  { icon: FiUser, title: "Portfolio Websites", description: "Personal and studio portfolios engineered to win serious clients." },
  { icon: FiCpu, title: "AI SaaS Landing Pages", description: "Dashboard-forward pages that make complex automation feel simple." },
  { icon: FiSmartphone, title: "Responsive Web Applications", description: "Interfaces that feel custom-built on every device, not just shrunk down." },
  { icon: FiCode, title: "Frontend Development", description: "Pixel-accurate, accessible implementations of any design system." },
  { icon: FiLayers, title: "Full Stack Development", description: "End-to-end builds — from database to deployed, production-ready product." },
  { icon: FiRefreshCw, title: "Website Redesign", description: "Modernizing dated sites without losing what already works for you." },
  { icon: FiZap, title: "Performance Optimization", description: "Faster load times and higher Lighthouse scores on existing codebases." },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-40">
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          heading="What I can build for you"
          description="From first pixel to production deploy — a full range of premium web development services."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: (i % 3) * 0.08,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group glass-surface relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary/30"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-primary/0 blur-2xl transition-colors duration-500 group-hover:bg-accent-primary/15"
                aria-hidden="true"
              />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-accent-secondary transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="relative mt-5 font-heading text-lg font-semibold text-text-primary">
                {title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-text-secondary">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
