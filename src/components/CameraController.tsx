import React, { useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface Props {
    /** Native scroll progress in [0, 1]. Read per-frame, never re-renders. */
    progress: React.RefObject<number>;
}

/**
 * Flies the camera along a spline driven by native page scroll.
 *
 * Previously this read drei's useScroll(), which required the whole page to
 * live inside <ScrollControls>. It now takes a plain ref so the DOM keeps
 * native scrolling and the scene is purely decorative.
 */
const CameraController: React.FC<Props> = ({ progress }) => {
    const { camera } = useThree();

    const curve = useMemo(
        () =>
            new THREE.CatmullRomCurve3([
                new THREE.Vector3(0, 0, 15),
                new THREE.Vector3(3, 1.5, 8),
                new THREE.Vector3(-3, -1, 0),
                new THREE.Vector3(4, 2, -12),
                new THREE.Vector3(0, 0, -25),
                new THREE.Vector3(-6, -3, -40),
                new THREE.Vector3(0, 0, -55),
                new THREE.Vector3(0, 0, -70),
            ]),
        []
    );

    const lookAtCurve = useMemo(
        () =>
            new THREE.CatmullRomCurve3([
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(0, 0, -8),
                new THREE.Vector3(0, 0, -18),
                new THREE.Vector3(0, 0, -30),
                new THREE.Vector3(0, 0, -45),
                new THREE.Vector3(0, 0, -60),
                new THREE.Vector3(0, 0, -75),
                new THREE.Vector3(0, 0, -90),
            ]),
        []
    );

    // Reused across frames so the per-frame path allocates nothing.
    const target = useMemo(() => new THREE.Vector3(), []);
    const lookAt = useMemo(() => new THREE.Vector3(), []);

    useFrame((_, delta) => {
        const t = Math.min(1, Math.max(0, progress.current ?? 0));

        curve.getPointAt(t, target);
        lookAtCurve.getPointAt(t, lookAt);

        // Frame-rate independent damping: the old fixed 0.3 lerp moved twice as
        // far per second on a 120Hz display as it did on 60Hz.
        camera.position.lerp(target, 1 - Math.pow(0.001, delta));
        camera.lookAt(lookAt);
    });

    return null;
};

export default CameraController;
