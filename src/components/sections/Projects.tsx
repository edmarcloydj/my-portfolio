"use client";

import { useState, useEffect } from "react";
import Card from "@/components/ui/Card";
import ProjectCardSkeleton from "@/components/ui/ProjectCardSkeleton";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Project } from "@/lib/types";

const projects: Project[] = [
  {
    id: 1,
    title: "Poop Counter — Fun Tracker App",
    description:
      "A simple interactive counter app that tracks and visualizes entries in a playful UI format.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: "project1.png",
    githubUrl: "https://github.com/edmarcloydj",
    liveUrl: "https://poopss.tiiny.site/",
  },
  {
    id: 2,
    title: "HIEL Website — Modern Portfolio Site",
    description:
      "A clean modern website built with a focus on performance, UI design, and responsiveness.",
    technologies: ["Figma", "TypeScript", "Next.js", "Tailwind CSS"],
    imageUrl: "project2.png",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Strecth UP — Figma UI/UX Prototype",
    description:
      "A UI/UX design prototype created in Figma focusing on modern layout systems and usability.",
    technologies: ["Figma", "UI/UX", "Mobile Design"],
    imageUrl: "project3.png",
    githubUrl: "https://figma.com",
    liveUrl:
      "https://www.figma.com/design/GsoblXnR098XumWayPEbtS/Stretch-UP-Prototype?node-id=103-4972&t=tBnBFknQhIXBDQHK-1",
  },
  {
    id: 4,
    title: "ILLVoice — Mobile & Web Dashboard",
    description:
      "A cross-platform system combining mobile interface and web dashboard for voice-driven interaction.",
    technologies: ["UI/UX", "Mobile Design", "Dashboard Design", "Figma"],
    imageUrl: "project4.png",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

export default function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-24 bg-[#E0E0E0] dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[#171717] dark:text-white text-4xl font-mono">//</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171717] dark:text-white">
              Recent Projects
            </h2>
            <div className="flex-1 h-px bg-[#171717]/10 dark:bg-white/10" />
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <ScrollAnimation key={i} delay={i * 150}>
                  <ProjectCardSkeleton />
                </ScrollAnimation>
              ))
            : projects.map((project, index) => (
                <ScrollAnimation key={project.id} delay={index * 150}>
                  <Card project={project} />
                </ScrollAnimation>
              ))}
        </div>
      </div>
    </section>
  );
}
