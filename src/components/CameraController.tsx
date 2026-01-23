import React, { useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

const CameraController: React.FC = () => {
    const scroll = useScroll();
    const { camera } = useThree();

    const curve = useMemo(() => {
        return new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 0, 15),      // Genesis - Start
            new THREE.Vector3(3, 1.5, 8),     // Entering Tunnel - More dynamic
            new THREE.Vector3(-3, -1, 0),     // Vault 1 - Deeper movement
            new THREE.Vector3(4, 2, -12),      // Vault 2 - More pronounced
            new THREE.Vector3(0, 0, -25),     // Bento Portal - Centered
            new THREE.Vector3(-6, -3, -40),   // Foundry - More dramatic
            new THREE.Vector3(0, 0, -55),     // Command Center - Final position
            new THREE.Vector3(0, 0, -70)      // Extended view
        ]);
    }, []);

    const lookAtCurve = useMemo(() => {
        return new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 0, -8),
            new THREE.Vector3(0, 0, -18),
            new THREE.Vector3(0, 0, -30),
            new THREE.Vector3(0, 0, -45),
            new THREE.Vector3(0, 0, -60),
            new THREE.Vector3(0, 0, -75),
            new THREE.Vector3(0, 0, -90)
        ]);
    }, []);

    useFrame(() => {
        const t = scroll.offset;

        // Position camera along spline with blazing fast, responsive movement
        const pos = curve.getPointAt(t);
        camera.position.lerp(pos, 0.3);

        const lookAtPos = lookAtCurve.getPointAt(t);
        camera.lookAt(lookAtPos);
    });

    return null;
};

export default CameraController;
