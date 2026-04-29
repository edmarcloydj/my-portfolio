"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Figma",
  "Framer",
  "Webflow",
  "JavaScript",
  "Python",
  "PostgreSQL",
  "Git",
];

const experiences = [
  {
    year: "2024 - Present",
    role: "Senior Web Designer",
    company: "Creative Agency",
    description: "Leading design systems and client projects.",
  },
  {
    year: "2022 - 2024",
    role: "Frontend Developer",
    company: "Tech Startup",
    description: "Built responsive web applications with React.",
  },
  {
    year: "2020 - 2022",
    role: "UI/UX Designer",
    company: "Design Studio",
    description: "Created user-centered designs for diverse clients.",
  },
];

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-neutral-500 text-sm font-mono">02</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              About Me
            </h2>
            <div className="flex-1 h-px bg-neutral-800" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <AnimatedSection>
            <div className="relative aspect-square max-w-md rounded-2xl overflow-hidden border border-neutral-800">
              <Image
                src="/images/profile.svg"
                alt="Profile photo"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection className="flex flex-col justify-center">
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              I&apos;m a versatile designer who partners with founders to turn
              ideas into real products. I focus on clear interfaces, sharp
              decisions, and fast execution.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              Bringing your vision to life quickly and efficiently—whether
              it&apos;s branding, apps, or websites—I&apos;ve got it covered,
              delivering smooth and effective solutions from start to finish.
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-full bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-neutral-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="border-t border-neutral-800 pt-16">
            <h3 className="text-xl font-semibold text-white mb-8">
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-4 gap-4 py-6 border-b border-neutral-800/50"
                >
                  <span className="text-neutral-500 text-sm font-mono">
                    {exp.year}
                  </span>
                  <div className="md:col-span-2">
                    <h4 className="text-white font-medium">{exp.role}</h4>
                    <p className="text-neutral-400 text-sm">{exp.company}</p>
                  </div>
                  <p className="text-neutral-500 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
