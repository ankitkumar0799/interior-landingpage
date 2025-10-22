// FILE: components/scenes/GalleryDepth.tsx
"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";


export default function GalleryDepth() {
const ref = useRef<HTMLDivElement>(null);
useEffect(() => {
const ctx = gsap.context(() => {
const cards = gsap.utils.toArray<HTMLElement>("[data-card]");
cards.forEach((card, i) => {
gsap.fromTo(card, { y: 80, rotateX: -8, opacity: 0 }, {
y: 0, rotateX: 0, opacity: 1, ease: "power3.out",
scrollTrigger: { trigger: card, start: "top 80%" }
});
});
}, ref);
return () => ctx.revert();
}, []);
return (
<section ref={ref} className="py-28 px-6 max-w-6xl mx-auto">
<h3 className="text-2xl md:text-4xl font-semibold mb-10">Depth Gallery</h3>
<div className="grid md:grid-cols-3 gap-6 perspective-[1200px]">
{Array.from({ length: 9 }).map((_, i) => (
<figure key={i} data-card className="group relative overflow-clip rounded-2xl border border-white/10 bg-white/5">
<img src={`/images/gallery/${(i%3)+1}.jpg`} alt="item" className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
<figcaption className="p-4 text-sm text-base.dim">Caption {i+1}</figcaption>
</figure>
))}
</div>
</section>
);
}