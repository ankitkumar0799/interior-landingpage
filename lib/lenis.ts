"use client";
import Lenis from "lenis";
let lenis: any = null;
export function getLenis() {
  if (!lenis) {
    lenis = new Lenis({ smoothWheel: true, syncTouch: true, wheelMultiplier: 1.0, gestureOrientation: "vertical" });
    const raf = (time: number) => { lenis!.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }
  return lenis;
}
