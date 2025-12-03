"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Float } from "@react-three/drei";
import Onion from "./Onion";

export default function Scene() {
    return (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, pointerEvents: "none" }}>
            <Canvas camera={{ position: [0, 0, 6] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22c55e" />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <Onion />
                </Float>

                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                {/* We disable orbit controls for the background to keep it subtle, or enable it if we want interactivity. 
            Since it's a background, maybe no controls or limited. */}
                {/* <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} /> */}
            </Canvas>
        </div>
    );
}
