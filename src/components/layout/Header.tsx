"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { NavigationItem } from "@/lib/types";

const navItems: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#E0E0E0]/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-[#171717]/10 dark:border-white/10" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-[#171717] dark:text-white font-bold text-lg tracking-tight">
          ecejay<span className="text-[#171717]/40 dark:text-white/40">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#171717]/60 dark:text-white/60 hover:text-[#171717] dark:hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="ml-4 pl-4 border-l border-[#171717]/10 dark:border-white/10">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="p-2 text-[#171717] dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-[#E0E0E0]/95 dark:bg-neutral-950/95 backdrop-blur-xl border-t border-[#171717]/10 dark:border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#171717]/60 dark:text-white/60 hover:text-[#171717] dark:hover:text-white transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
