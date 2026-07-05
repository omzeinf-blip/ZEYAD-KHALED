"use client";

import { FiGithub, FiArrowUp } from "react-icons/fi";
import { SiFiverr } from "react-icons/si";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: FiGithub, href: "https://github.com/omzeinf-blip", label: "GitHub" },
  { icon: SiFiverr, href: "https://www.fiverr.com/runwayinf", label: "Fiverr" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="group inline-block font-heading text-[13px] font-semibold uppercase tracking-[0.28em] text-text-primary">
              <span className="transition-all duration-500 ease-out-expo group-hover:tracking-[0.38em] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-primary group-hover:to-accent-secondary">
                Zeyad Khaled
              </span>
            </span>
            <p className="mt-2 max-w-xs text-sm text-text-muted">
              Premium digital experiences for startups, businesses and brands.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor="pointer"
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                data-cursor="pointer"
                className="glass-surface flex h-9 w-9 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-accent-secondary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              data-cursor="pointer"
              className="glass-surface flex h-9 w-9 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-accent-secondary focus-ring"
            >
              <FiArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-text-muted">
          © {new Date().getFullYear()} Zeyad Khaled. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
