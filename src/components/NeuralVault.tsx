import React from 'react';
import { Text, Box } from '@react-three/drei';

const NeuralVault: React.FC = () => {
    const highlights = [
        { text: "ImagineArt 1.5", pos: [2, 1, -5] },
        { text: "Lead ML Engineer", pos: [-2, -1, -8] },
        { text: "Agentic AI Architect", pos: [2, -2, -12] },
        { text: "5+ Years Precision", pos: [-3, 2, -15] }
    ];

    return (
        <group>
            {/* Tunnel structure elements */}
            {Array.from({ length: 10 }).map((_, i) => (
                <mesh key={i} position={[0, 0, -i * 10]} rotation={[0, 0, Math.PI / 4]}>
                    <torusGeometry args={[8, 0.02, 16, 4]} />
                    <meshStandardMaterial color="#4b5563" transparent opacity={0.2} metalness={0.9} roughness={0.1} />
                </mesh>
            ))}

            {highlights.map((h, i) => (
                <group key={i} position={h.pos as any}>
                    <Box args={[4, 1, 0.05]}>
                        <meshPhysicalMaterial
                            color="#e5e7eb"
                            transparent
                            opacity={0.05}
                            transmission={0.9}
                            thickness={0.5}
                            roughness={0}
                            metalness={0.1}
                        />
                    </Box>
                    <Text
                        fontSize={0.2}
                        color="#ffffff"
                        position={[0, 0, 0.03]}
                        font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tMe62o-9ETq98H06HrWWSYVvS-6D6qJNDSre.woff"
                    >
                        {h.text}
                    </Text>
                </group>
            ))}
        </group>
    );
};

export default NeuralVault;
