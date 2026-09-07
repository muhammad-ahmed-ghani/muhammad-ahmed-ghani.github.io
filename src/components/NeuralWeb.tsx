import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Builds the particle field.
 *
 * Module scope, and seeded rather than Math.random(): random values during
 * render are impure — the field would reshuffle on any re-render — and a
 * fixed seed keeps the backdrop identical across loads.
 */
function buildField(count: number) {
  let seed = 0x9e3779b9;
  const rand = () => {
    seed ^= seed << 13; seed >>>= 0;
    seed ^= seed >> 17;
    seed ^= seed << 5;  seed >>>= 0;
    return seed / 0xffffffff;
  };

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3]     = (rand() - 0.5) * 70;
    positions[i * 3 + 1] = (rand() - 0.5) * 70;
    positions[i * 3 + 2] = (rand() - 0.5) * 130;

    if (rand() > 0.8) {
      // ~20% electric cyan
      colors[i * 3]     = 0.0;
      colors[i * 3 + 1] = 0.7;
      colors[i * 3 + 2] = 1.0;
    } else {
      // cool white / light gray
      const v = 0.7 + rand() * 0.3;
      colors[i * 3]     = v;
      colors[i * 3 + 1] = v;
      colors[i * 3 + 2] = v;
    }
  }

  return { positions, colors };
}

const NeuralWeb: React.FC = () => {
  const count = 2400;

  const { positions, colors } = useMemo(() => buildField(count), [count]);

  const pointsRef = useRef<THREE.Points>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.z = t * 0.012;
      pointsRef.current.rotation.y = Math.sin(t * 0.004) * 0.12;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

export default NeuralWeb;
