import { Project } from "@/lib/types";
import Image from "next/image";

interface CardProps {
  project: Project;
}

export default function Card({ project }: CardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 border border-[#171717]/10 dark:border-white/10 transition-all duration-500 hover:border-[#171717]/20 dark:hover:border-white/20 hover:shadow-lg dark:hover:shadow-white/5">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-900 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#171717] dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-[#171717]/60 dark:text-white/60 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-[#171717]/5 dark:bg-white/5 text-[#171717]/70 dark:text-white/70 border border-[#171717]/10 dark:border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#171717] dark:text-white bg-[#171717]/5 dark:bg-white/5 rounded-full hover:bg-[#171717]/10 dark:hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 2.091-1.278.727.201 1.467.302 2.209.306.741-.004 1.481-.105 2.209-.306 1.084.956 2.091 1.278 2.091 1.278.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#171717] dark:bg-white dark:text-neutral-900 rounded-full hover:bg-[#171717]/80 dark:hover:bg-white/80 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0 0L10 14"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
