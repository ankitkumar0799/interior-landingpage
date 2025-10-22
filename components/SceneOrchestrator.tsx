// FILE: components/SceneOrchestrator.tsx
"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { getLenis } from "@/lib/lenis";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";


const HeroParallax = dynamic(() => import("@/components/scenes/HeroParallax"));
const GalleryDepth = dynamic(() => import("@/components/scenes/GalleryDepth"));
const ThreeProduct = dynamic(() => import("@/components/scenes/ThreeProduct"));


export default function SceneOrchestrator() {
const container = useRef<HTMLDivElement>(null);


useEffect(() => {
const lenis = getLenis();
// Hook Lenis into ScrollTrigger
// @ts-ignore
lenis.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(document.body, {
scrollTop(value) { return arguments.length ? lenis.scrollTo(value) : window.scrollY; },
getBoundingClientRect() { return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }; }
});
ScrollTrigger.addEventListener("refresh", () => lenis!.resize());
ScrollTrigger.refresh();
return () => { ScrollTrigger.kill(); };
}, []);


// Example global progress mapping for nav/intro outro
const { scrollYProgress } = useScroll({ target: container });
const opacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [0, 0.6, 0]);


return (
<div ref={container} className="relative">
<motion.div style={{ opacity }} className="fixed inset-0 pointer-events-none bg-black" />
<HeroParallax/>
<GalleryDepth/>
<ThreeProduct/>
<footer className="h-[60svh] grid place-items-center text-center">
<p className="text-base.dim">© {new Date().getFullYear()} Illusion Starter</p>
</footer>
</div>
);
}