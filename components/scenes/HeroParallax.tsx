// FILE: components/scenes/HeroParallax.tsx
"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { motion } from "framer-motion";


export default function HeroParallax() {
const ref = useRef<HTMLDivElement>(null);


useEffect(() => {
const ctx = gsap.context(() => {
const tl = gsap.timeline({
scrollTrigger: {
trigger: ref.current,
start: "top top",
end: "+=150%",
scrub: 1
}
});
tl.fromTo("[data-layer='bg']", { yPercent: -10 }, { yPercent: 10 }, 0)
.fromTo("[data-layer='mid']", { yPercent: -20 }, { yPercent: 20 }, 0)
.fromTo("[data-layer='fg']", { yPercent: -30, scale: 1.05 }, { yPercent: 30, scale: 1 }, 0)
.fromTo("[data-cta]", { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, 0.25);
}, ref);
return () => ctx.revert();
}, []);


return (
<section ref={ref} className="relative h-[180svh] overflow-clip">
<div data-layer='bg' className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_50%,#1a1a25_0%,transparent_70%)]" />
<img data-layer='mid' src="/images/hero-mid.png" alt="mid" className="absolute inset-0 w-full h-full object-cover opacity-80"/>
<img data-layer='fg' src="/images/hero-fg.png" alt="fg" className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[1200px] max-w-[95vw]"/>
<div className="sticky top-0 h-screen grid place-items-center">
<motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-bold text-center">
Pixel‑Perfect Parallax
</motion.h2>
<button data-cta className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 backdrop-blur border border-white/15 hover:bg-white/15">
Explore
</button>
</div>
</section>
);
}