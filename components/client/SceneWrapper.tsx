"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { SceneSkeleton } from "@/components/ui/scene-skeleton";

const SceneOrchestrator = dynamic(() => import("@/components/SceneOrchestrator"), { ssr: false });

export default function SceneWrapper() {
  return (
    <Suspense fallback={<SceneSkeleton />}>
      <SceneOrchestrator />
    </Suspense>
  );
}
