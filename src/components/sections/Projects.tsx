"use client";

import { useRef, useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import { Project } from "@/lib/types";

const projects: Project[] = [
  {
    id: 1,
    title: "Formula Vintage",
    description:
      "Crafted a design that honors the rich heritage of classic cars while adding a modern twist. Combining timeless elegance with sleek, contemporary elements.",
    technologies: ["Landing Page", "Mobile App", "Branding"],
    imageUrl: "/images/project-1.svg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Sprey Zest",
    description:
      "Took a playful, bold approach to packaging and branding. Infused energy and personality into every detail, making the product stand out on shelves.",
    technologies: ["Website Design", "Branding", "UI/UX"],
    imageUrl: "/images/project-2.svg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Super Pro",
    description:
      "Redefined what it means to be a professional by focusing on the mindset and determination behind success, not just the achievements.",
    technologies: ["Desktop App", "Mobile App", "Design System"],
    imageUrl: "/images/project-3.svg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Architech Buildings",
    description:
      "Redefined the concept of modern living by creating a design that challenges conventional boundaries. Focusing on comfort, functionality, and unexpected elements.",
    technologies: ["Mobile App", "Branding", "Website Design"],
    imageUrl: "/images/project-4.svg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
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

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-neutral-500 text-sm font-mono">03</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Recent Projects
            </h2>
            <div className="flex-1 h-px bg-neutral-800" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <AnimatedSection key={project.id}>
              <Card project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
