import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const CinematicBranding: React.FC = () => {
    const groupRef = useRef<THREE.Group>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.1;
    });

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                <Text
                    font="https://fonts.gstatic.com/s/outfit/v11/QGYsz_MVcNcBLPuHxqDXbOf6mX8.woff"
                    fontSize={1.2}
                    color="#e5e7eb"
                    maxWidth={10}
                    textAlign="center"
                    position={[0, 0.5, 0]}
                    letterSpacing={0.05}
                >
                    MUHAMMAD
                </Text>
                <Text
                    font="https://fonts.gstatic.com/s/outfit/v11/QGYsz_MVcNcBLPuHxqDXbOf6mX8.woff"
                    fontSize={1.2}
                    color="#9ca3af"
                    maxWidth={10}
                    textAlign="center"
                    position={[0, -0.5, 0]}
                    letterSpacing={0.1}
                >
                    AHMED GHANI
                </Text>
            </Float>

            {/* Simplified floor shadow/depth marker for performance */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
                <planeGeometry args={[20, 20]} />
                <meshBasicMaterial
                    color="#050505"
                    transparent
                    opacity={0.5}
                />
            </mesh>
        </group>
    );
};

export default CinematicBranding;
