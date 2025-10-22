"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Lazy load R3F content — prevents ReactCurrentOwner errors
const ThreeCanvas = dynamic(() => import("./ThreeCanvas"), { ssr: false });

export default function ThreeProduct() {
  return (
    <section id="three-section" className="h-[120svh]">
      <div className="sticky top-0 h-screen">
        <Suspense fallback={<div className="grid h-full place-items-center">Loading 3D...</div>}>
          <ThreeCanvas />
        </Suspense>
      </div>
    </section>
  );
}
