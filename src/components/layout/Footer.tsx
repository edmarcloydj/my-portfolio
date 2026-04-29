import { SocialLink } from "@/lib/types";

const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/edmarcloydj", icon: "github" },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { platform: "Twitter", url: "https://twitter.com", icon: "twitter" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function SocialIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 2.091-1.278.727.201 1.467.302 2.209.306.741-.004 1.481-.105 2.209-.306 1.084.956 2.091 1.278 2.091 1.278.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  };
  return icons[icon] || null;
}

export default function Footer() {
  return (
    <footer className="border-t border-[#171717]/10 dark:border-white/10 bg-[#E0E0E0] dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-[#171717] dark:text-white font-bold text-lg mb-4">
              ecejay<span className="text-[#171717]/40 dark:text-white/40">.</span>
            </h3>
            <p className="text-[#171717]/60 dark:text-white/60 text-sm leading-relaxed">
              Crafting digital experiences with precision and creativity.
            </p>
          </div>

          <div>
            <h4 className="text-[#171717] dark:text-white font-medium mb-4">Navigation</h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#171717]/60 dark:text-white/60 hover:text-[#171717] dark:hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#171717] dark:text-white font-medium mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#171717]/60 dark:text-white/60 hover:text-[#171717] dark:hover:text-white transition-colors"
                  aria-label={social.platform}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
            <a
              href="mailto:hello@example.com"
              className="text-[#171717]/60 dark:text-white/60 hover:text-[#171717] dark:hover:text-white transition-colors text-sm"
            >
              edmarcloydj@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-[#171717]/10 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#171717]/40 dark:text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Edmar Cloyd Jagunap. All rights reserved.
          </p>
          <p className="text-[#171717]/40 dark:text-white/40 text-sm">
            Designed and built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
