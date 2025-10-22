// FILE: next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
experimental: {
optimizePackageImports: [
"framer-motion",
"gsap",
"lenis",
"three",
"@react-three/fiber",
"@react-three/drei"
]
}
};
export default nextConfig;