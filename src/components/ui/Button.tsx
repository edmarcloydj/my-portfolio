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
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-white text-neutral-900 hover:bg-neutral-200 focus:ring-white",
    secondary:
      "bg-neutral-800 text-white hover:bg-neutral-700 focus:ring-neutral-600",
    outline:
      "border border-neutral-600 text-white hover:border-white hover:bg-white/5 focus:ring-neutral-500",
  };

  const Tag = onClick ? "button" : "a";
  const attrs = {
    className: `${baseStyles} ${variants[variant]} ${className}`,
    onClick: onClick || undefined,
    type: type || undefined,
    disabled,
  };

  return <Tag {...attrs}>{children}</Tag>;
}
