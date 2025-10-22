// FILE: lib/video-map.ts (Map video timestamps → scroll ranges per scene)
export type SceneCue = { startS: number; endS: number; ease?: string };
export type SceneMap = Record<string, SceneCue[]>;
export const sceneMap: SceneMap = {
// Auto-derived from your uploaded 29.5s reference (4.9s chunks)
// Adjust freely; I'll refine to exact beats next pass.
HeroParallax: [{ startS: 0.0, endS: 6.0 }],
GalleryDepth: [{ startS: 6.0, endS: 12.0 }],
ThreeProduct: [{ startS: 12.0, endS: 18.0 }],
// Extra scenes you can enable as we match the video
// RevealStack: [{ startS: 18.0, endS: 24.0 }],
// OutroLogo: [{ startS: 24.0, endS: 29.5 }]
};