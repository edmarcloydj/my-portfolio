"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#E0E0E0] dark:bg-neutral-950 overflow-hidden scroll-mt-24 flex flex-col sm:block items-center justify-center"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={containerRef} className="w-full overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            <span
              className="text-[10vw] sm:text-[12vw] md:text-[16vw] lg:text-[18vw] xl:text-[20vw] font-normal text-[#171717]/10 dark:text-white/10 leading-none tracking-tight"
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
            >
              Edmar Cloyd Jagunap
            </span>
            <span
              className="text-[10vw] sm:text-[12vw] md:text-[16vw] lg:text-[18vw] xl:text-[20vw] font-normal text-[#171717]/10 dark:text-white/10 leading-none tracking-tight"
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
            >
              Edmar Cloyd Jagunap
            </span>
          </div>
        </div>
      </div>

      <div className="z-10 w-full flex justify-center mt-10 sm:absolute sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2">
        <Image
          src={theme === "light" ? "/profile1.png" : "/profile2.png"}
          alt="Edmar Cloyd Jagunap"
          width={600}
          height={600}
          className="object-contain w-[220px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[700px] h-auto drop-shadow-2xl"
          priority
        />
      </div>

      <div className="w-full flex flex-col items-center text-center mt-6 sm:absolute sm:bottom-[8%] sm:right-4 sm:text-right sm:items-end sm:max-w-md lg:max-w-lg px-4 sm:px-0 z-20">
        <p
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#171717] dark:text-white leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
        >
          Web Designer
        </p>

        <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-lg text-[#171717]/50 dark:text-white/50 max-w-xs sm:max-w-md">
          I build modern, responsive web applications focused on clean design
          and seamless user experience.
        </p>

        <a
          href="#about"
          className="mt-4 inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-3 text-sm font-medium text-white bg-[#171717] dark:bg-white dark:text-neutral-900 rounded-full hover:bg-[#171717]/80 dark:hover:bg-white/80 transition-all duration-300"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
