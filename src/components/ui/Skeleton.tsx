export default function Skeleton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`animate-pulse bg-[#171717]/10 dark:bg-white/10 rounded-xl ${className}`}
    />
  );
}
