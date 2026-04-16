import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Preload } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import CameraController from './CameraController';
import ScrollCapture from './ScrollCapture';
import NeuralWeb from './NeuralWeb';
import CinematicBranding from './CinematicBranding';
import NeuralVault from './NeuralVault';
import CoreFoundry from './CoreFoundry';
import CommandCenter from './CommandCenter';
import Hero from './Hero';
import BentoGrid from './BentoGrid';
import Experience from './Experience';
import SkillHive from './SkillHive';
import Certifications from './Certifications';
import Footer from './Footer';

const NeuralNexusCanvas: React.FC = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 0,
            background: '#000000',
            overflow: 'hidden'
        }}>
            <Canvas
                shadows
                camera={{ position: [0, 0, 15], fov: 50 }}
                gl={{ 
                    antialias: true, 
                    alpha: false, 
                    stencil: false, 
                    depth: true, 
                    powerPreference: "high-performance",
                    preserveDrawingBuffer: false
                }}
                dpr={[1, 2]}
                performance={{ min: 0.5 }}
            >
                <color attach="background" args={['#000000']} />

                <ScrollControls pages={9} damping={0.12} style={{ scrollSnapType: 'none' }}>
                    <ScrollCapture />
                    <CameraController />

                    <Suspense fallback={null}>
                        <NeuralWeb />
                        <CinematicBranding />
                        <NeuralVault />
                        <CoreFoundry />
                        <CommandCenter />
                    </Suspense>

                    <Scroll html style={{ width: '100%', position: 'relative', zIndex: 1 }}>
                        {/* Hero */}
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <Hero />
                        </div>
                        {/* Spacer: breathe before Projects */}
                        <div style={{ height: '40vh', position: 'relative', zIndex: 1 }} />
                        {/* Projects / Bento */}
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <BentoGrid />
                        </div>
                        {/* Spacer */}
                        <div style={{ height: '20vh', position: 'relative', zIndex: 1 }} />
                        {/* Skills */}
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <SkillHive />
                        </div>
                        {/* Spacer */}
                        <div style={{ height: '20vh', position: 'relative', zIndex: 1 }} />
                        {/* Certifications */}
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <Certifications />
                        </div>
                        {/* Spacer */}
                        <div style={{ height: '20vh', position: 'relative', zIndex: 1 }} />
                        {/* Experience */}
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <Experience />
                        </div>
                        {/* Footer – no spacer so it lands immediately after Experience */}
                        <div style={{ position: 'relative', zIndex: 10 }}>
                            <Footer />
                        </div>
                    </Scroll>
                </ScrollControls>

                <Suspense fallback={null}>
                    <EffectComposer multisampling={0}>
                        <Bloom
                            luminanceThreshold={0.9}
                            mipmapBlur
                            intensity={0.4}
                            levels={4}
                        />
                        <Noise opacity={0.03} />
                        <Vignette eskil={false} offset={0.1} darkness={1.1} />
                    </EffectComposer>
                </Suspense>

                <Preload all />
            </Canvas>
        </div>
    );
};

export default NeuralNexusCanvas;
