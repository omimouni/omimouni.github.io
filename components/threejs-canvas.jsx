"use client";
import { AsciiRenderer, GradientTexture, Grid, Helper, MeshDiscardMaterial, MeshDistortMaterial, MeshWobbleMaterial, PointMaterial, Wireframe } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

function Torusknot(props) {
    const ref = useRef()
    const viewport = useThree((state) => state.viewport);


    // useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 2))
    return (
        <>
            <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={Math.min(viewport.width, viewport.height) / 4.5}>
                <color attach="background" args={['black']} />
                <torusKnotGeometry args={[1, 0.2, 128, 32]} />
                <MeshDistortMaterial attachArray="materials" distort={0.5} speed={1}>
                    <GradientTexture stops={[0, 0.8, 1]} colors={['#2c3e50', '#f1faee', '#a8dadc']} size={100} />
                </MeshDistortMaterial>
            </mesh>
        </>
    )
}


export default function ThreeJSCanvas() {
    return <div className="w-full h-full">
        <Canvas className="canvas">
            <ambientLight intensity={10} />
            <Torusknot />
        </Canvas>
    </div>;
}