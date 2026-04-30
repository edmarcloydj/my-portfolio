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
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#171717] dark:text-white bg-[#171717]/5 dark:bg-white/5 rounded-full hover:bg-[#171717]/10 dark:hover:bg-white/10 transition-colors"
            >
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#171717] dark:bg-white dark:text-neutral-900 rounded-full hover:bg-[#171717]/80 dark:hover:bg-white/80 transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
