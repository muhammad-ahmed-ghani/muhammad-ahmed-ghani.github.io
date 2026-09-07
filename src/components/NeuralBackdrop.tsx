import React, { Suspense, lazy } from 'react';
import { useEnvironment } from '../hooks/useEnvironment';
import { useScrollProgress } from '../hooks/useScrollProgress';

const NeuralScene = lazy(() => import('./NeuralScene'));

/**
 * Decorative WebGL backdrop, pinned behind the page content.
 *
 * Three deliberate properties:
 *  - It renders nothing during prerender and nothing on the first client paint,
 *    so it can never delay or shift the real content.
 *  - It is skipped outright on coarse-pointer / small / low-core / low-memory
 *    devices and under prefers-reduced-motion, where it was the main cause of
 *    dropped frames.
 *  - It is aria-hidden and pointer-events:none — purely atmosphere, never
 *    something a crawler or a screen reader has to walk through to reach text.
 */
const NeuralBackdrop: React.FC = () => {
    const env = useEnvironment();
    const progress = useScrollProgress();

    const shouldRender = env.ready && env.webgl && !env.reducedMotion && !env.lowPower;

    return (
        <div className="backdrop" aria-hidden="true">
            {shouldRender && (
                <Suspense fallback={null}>
                    <NeuralScene progress={progress} />
                </Suspense>
            )}
        </div>
    );
};

export default NeuralBackdrop;
