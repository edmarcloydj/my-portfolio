"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#E0E0E0] dark:bg-neutral-950 flex items-center justify-center transition-opacity duration-500">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-[#171717]/20 dark:border-white/20 border-t-[#171717] dark:border-t-white rounded-full animate-spin" />
        <p className="text-sm text-[#171717]/50 dark:text-white/50 font-medium tracking-wider uppercase">
          Loading
        </p>
      </div>
    </div>
  );
}
