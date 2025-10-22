"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { Suspense } from "react";

function Box() {
  return (
    <Float floatIntensity={1.2} rotationIntensity={0.6}>
      <mesh castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#9ab3ff" metalness={0.3} roughness={0.1} />
      </mesh>
    </Float>
  );
}

export default function ThreeCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 2.2], fov: 45 }} shadows>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} intensity={2} castShadow />
      <Suspense fallback={null}>
        <Environment preset="studio" />
        <Box />
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  );
}
