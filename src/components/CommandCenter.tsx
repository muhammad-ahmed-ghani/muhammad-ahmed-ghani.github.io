import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const CommandCenter: React.FC = () => {
    const groupRef = useRef<THREE.Group>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        groupRef.current.rotation.y = Math.cos(t * 0.1) * 0.05;
    });

    return (
        <group ref={groupRef} position={[0, 0, -60]}>
            {/* Cinematic back-lighting frame */}
            <mesh position={[0, 0, -5]}>
                <planeGeometry args={[20, 10]} />
                <meshBasicMaterial color="#050505" />
            </mesh>

            <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
                <Text
                    font="https://fonts.gstatic.com/s/outfit/v11/QGYsz_MVcNcBLPuHxqDXbOf6mX8.woff"
                    fontSize={0.8}
                    color="#e5e7eb"
                    maxWidth={10}
                    textAlign="center"
                    position={[0, 1, 0]}
                    letterSpacing={0.1}
                >
                    LET'S ARCHITECT THE FUTURE.
                </Text>
            </Float>

            {/* Decorative technical console lines */}
            {Array.from({ length: 20 }).map((_, i) => (
                <mesh key={i} position={[0, -2, -2 - i * 0.1]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[10, 0.01]} />
                    <meshBasicMaterial color="#4b5563" transparent opacity={0.3} />
                </mesh>
            ))}

            <group position={[0, -1, 0]}>
                <Text
                    font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tMe62o-9ETq98H06HrWWSYVvS-6D6qJNDSre.woff"
                    fontSize={0.15}
                    color="#9ca3af"
                    position={[0, 0, 0]}
                >
                    COMMAND CENTER // STATUS: READY
                </Text>
            </group>
        </group>
    );
};

export default CommandCenter;
