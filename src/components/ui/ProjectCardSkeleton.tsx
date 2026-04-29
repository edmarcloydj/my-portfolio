import Skeleton from "@/components/ui/Skeleton";

export default function ProjectCardSkeleton() {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 border border-[#171717]/10 dark:border-white/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Skeleton className="w-full h-full rounded-none" />
      </div>

      <div className="p-6">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-5/6 mb-4" />

        <div className="flex flex-wrap gap-2 mb-5">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-24" />
        </div>

        <div className="flex gap-3">
          <Skeleton className="h-9 w-20" />
          <Skeleton className="h-9 w-24" />
        </div>
      </div>
    </div>
  );
}
