"use client";

export function SceneSkeleton() {
  return (
    <div className="h-[200svh] grid place-items-center opacity-60">
      <div className="animate-pulse">Loading scenes…</div>
    </div>
  );
}
