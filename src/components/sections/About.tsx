"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { useTheme } from "@/context/ThemeContext";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Figma",
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "PostgreSQL",
  "Git",
];

const experiences = [
  {
    role: "Bachelor of Science in Computer Science",
    company: "Central Philippine University",
    year: "Present",
    description:
      "Currently studying Computer Science with focus on frontend development and UI/UX design.",
  },
   {
    role: "UI/UX Designer",
    company: "Tigbaw System",
    year: "Present",
    description:
      "Focused on UI design and user experience improvements for digital projects.",
  },
  {
    role: "UI/UX Designer",
    company: "Step Up Commission",
    year: "2025",
    description:
      "Designed modern and user-friendly interfaces for web-based platforms.",
  },
  
];

export default function About() {
  const { theme } = useTheme();
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      imageRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="about" className="py-24 bg-[#E0E0E0] dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[#171717] dark:text-white text-4xl font-mono">//</span>
            <h2 className="text-3xl  md:text-4xl font-bold text-[#171717] dark:text-white">
              About Me
            </h2>
            <div className="flex-1 h-px bg-[#171717]/10 dark:bg-white/10" />
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <ScrollAnimation delay={100} direction="right">
            <div
              ref={imageRef}
              className="relative w-full max-w-md aspect-[3/4] mt-5 rounded-2xl overflow-hidden border border-[#171717]/10 dark:border-white/10 transition-transform duration-200 ease-out"
            >
              <Image
                src={theme === "light" ? "/profile2.png" : "/profile1.png"}
                alt="Profile photo"
                fill
                unoptimized
                className="object-cover object-top"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200} direction="left">
            <div className="flex flex-col justify-center mt2">
              <p className="text-[#171717]/60 dark:text-white/60 text-lg leading-relaxed mb-6">
               Hi! I&apos;m Cloyd, a student from Central Philippine University.
                I enjoy building clean, simple, and user-friendly websites
                that feel good to use.
              </p>
              <p className="text-[#171717]/60 dark:text-white/60 text-lg leading-relaxed mb-8">
                  I enjoy learning and experimenting with different projects, whether it's websites, apps, or simple designs, always aiming to improve my skills and create things that work well.
              </p>

              <h3 className="text-xl font-semibold text-[#171717] dark:text-white mb-4 mt-2">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-full bg-[#171717]/5 dark:bg-white/5 text-[#171717]/70 dark:text-white/70 border border-[#171717]/10 dark:border-white/10 hover:border-[#171717]/30 dark:hover:border-white/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={100}>
          <div className="border-t border-[#171717]/10 dark:border-white/10 pt-16">
            <h3 className="text-xl font-semibold text-[#171717] dark:text-white mb-8">
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ScrollAnimation key={index} delay={index * 100} direction="up" distance={20}>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-6 border-b border-[#171717]/10 dark:border-white/10">
                    <span className="text-[#171717]/40 dark:text-white/40 text-sm font-mono">
                      {exp.year}
                    </span>
                    <div className="md:col-span-2">
                      <h4 className="text-[#171717] dark:text-white font-medium">{exp.role}</h4>
                      <p className="text-[#171717]/60 dark:text-white/60 text-sm">{exp.company}</p>
                    </div>
                    <p className="text-[#171717]/40 dark:text-white/40 text-sm">{exp.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
