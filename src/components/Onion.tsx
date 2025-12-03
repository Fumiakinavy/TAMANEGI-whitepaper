"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Onion() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={ref}>
      {/* Core */}
      <mesh>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#ffffff" emissive="#d946ef" emissiveIntensity={0.8} />
      </mesh>
      
      {/* Inner Layer */}
      <mesh>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshPhysicalMaterial 
          color="#d946ef" 
          transparent 
          opacity={0.4} 
          roughness={0.2} 
          metalness={0.1} 
          transmission={0.6} 
          thickness={1}
        />
      </mesh>

      {/* Outer Layer */}
      <mesh>
        <sphereGeometry args={[1.7, 32, 32]} />
        <meshPhysicalMaterial 
          color="#8b5cf6" 
          transparent 
          opacity={0.2} 
          roughness={0.1} 
          metalness={0.1} 
          transmission={0.4} 
          thickness={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
      
       {/* Wireframe Layer for "Tech" feel */}
      <mesh>
        <sphereGeometry args={[1.8, 24, 24]} />
        <meshBasicMaterial color="#22c55e" wireframe transparent opacity={0.15} />
      </mesh>
    </group>
  );
}
