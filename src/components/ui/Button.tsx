"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  href,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "text-white bg-[#171717] dark:bg-white dark:text-neutral-900 hover:bg-[#171717]/80 dark:hover:bg-white/80 focus:ring-[#171717]",
    secondary:
      "text-[#171717] dark:text-white bg-[#171717]/10 dark:bg-white/10 hover:bg-[#171717]/20 dark:hover:bg-white/20 focus:ring-[#171717]/30",
    outline:
      "text-[#171717] dark:text-white border border-[#171717]/30 dark:border-white/30 hover:border-[#171717] dark:hover:border-white hover:bg-[#171717]/5 dark:hover:bg-white/5 focus:ring-[#171717]/30",
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
