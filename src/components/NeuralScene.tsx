import React from 'react';
import { Canvas } from '@react-three/fiber';
import CameraController from './CameraController';
import NeuralWeb from './NeuralWeb';

interface Props {
    progress: React.RefObject<number>;
}

/**
 * The WebGL layer itself. Loaded as a separate chunk so three.js never lands
 * in the initial bundle, and only ever mounted behind fully-rendered DOM.
 */
const NeuralScene: React.FC<Props> = ({ progress }) => (
    <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
        // Capped at 1.5 rather than 2: beyond this the particle field is
        // indistinguishable but fill cost keeps climbing. This only ever
        // mounts on full-power devices, so there is no low tier to branch on.
        dpr={[1, 1.5]}
        gl={{
            antialias: false,
            alpha: false,
            stencil: false,
            depth: true,
            powerPreference: 'high-performance',
        }}
        performance={{ min: 0.5 }}
        style={{ position: 'absolute', inset: 0 }}
    >
        <color attach="background" args={['#050505']} />
        <CameraController progress={progress} />
        <NeuralWeb />
    </Canvas>
);

export default NeuralScene;
