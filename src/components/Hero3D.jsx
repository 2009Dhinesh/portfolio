import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
function AnimatedSphere() {
  const meshRef = useRef(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });
  return <Float speed={1.5} rotationIntensity={1} floatIntensity={2}><Sphere args={[1, 100, 200]} scale={2} ref={meshRef}><MeshDistortMaterial
    color="#C7B9FF"
    attach="material"
    distort={0.4}
    speed={2}
    roughness={0.2}
    metalness={0.8}
  /></Sphere></Float>;
}
export default function Hero3D() {
  return <div className="absolute top-0 right-0 w-full h-[50vh] md:h-full md:w-1/2 z-0 opacity-60 md:opacity-100 pointer-events-none"><Canvas camera={{ position: [0, 0, 5] }}><ambientLight intensity={0.5} /><directionalLight position={[2, 5, 2]} intensity={1} /><AnimatedSphere /></Canvas></div>;
}
