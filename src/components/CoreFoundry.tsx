import React from 'react';
import { Text, Cylinder, Sphere } from '@react-three/drei';

const CoreFoundry: React.FC = () => {
    const coreSkills = [
        { name: "LLMOps", pos: [-4, -3, -40] },
        { name: "GenAI", pos: [4, -4, -42] },
        { name: "CUDA", pos: [-5, -6, -45] },
        { name: "PyTorch", pos: [5, -4, -48] },
        { name: "Agentic Systems", pos: [0, -8, -50] }
    ];

    return (
        <group>
            {/* Machinery background elements */}
            {Array.from({ length: 5 }).map((_, i) => (
                <group key={i} position={[0, -5, -40 - i * 5]}>
                    <Cylinder args={[3, 3, 0.1, 32]} rotation={[Math.PI / 2, 0, 0]}>
                        <meshStandardMaterial color="#27272a" metalness={0.9} roughness={0.1} />
                    </Cylinder>
                    <Sphere args={[0.5, 16, 16]} position={[3, 0, 0]}>
                        <meshStandardMaterial color="#e5e7eb" metalness={1} roughness={0} />
                    </Sphere>
                    <Sphere args={[0.5, 16, 16]} position={[-3, 0, 0]}>
                        <meshStandardMaterial color="#e5e7eb" metalness={1} roughness={0} />
                    </Sphere>
                </group>
            ))}

            {coreSkills.map((skill, i) => (
                <group key={i} position={skill.pos as any}>
                    <Text
                        fontSize={0.5}
                        color="#ffffff"
                        font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tMe62o-9ETq98H06HrWWSYVvS-6D6qJNDSre.woff"
                        letterSpacing={0.1}
                    >
                        {skill.name}
                    </Text>
                    <mesh position={[0, -0.4, 0]}>
                        <boxGeometry args={[4, 0.05, 0.1]} />
                        <meshStandardMaterial color="#4b5563" />
                    </mesh>
                </group>
            ))}
        </group>
    );
};

export default CoreFoundry;
