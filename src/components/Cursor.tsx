import React, { useEffect, useRef } from 'react';
import { useEnvironment } from '../hooks/useEnvironment';
import styles from './Cursor.module.css';

/**
 * Custom trailing cursor.
 *
 * Two fixes over the previous version:
 *  - The effect listed `isVisible` in its dependency array, so the very first
 *    mouse move tore down the listener and cancelled the rAF loop only to
 *    immediately recreate both. Visibility is now written straight to the node.
 *  - It ran on touch devices, where there is no cursor to trail — burning a
 *    permanent rAF loop on exactly the devices least able to spare it.
 */
const Cursor: React.FC = () => {
    const env = useEnvironment();
    const cursorRef = useRef<HTMLDivElement>(null);
    const raf = useRef<number | undefined>(undefined);
    const target = useRef({ x: 0, y: 0 });
    const current = useRef({ x: 0, y: 0 });
    const visible = useRef(false);

    const enabled = env.ready && !env.coarsePointer;

    useEffect(() => {
        if (!enabled) return;

        const node = cursorRef.current;
        if (!node) return;

        const onMove = (e: MouseEvent) => {
            target.current.x = e.clientX;
            target.current.y = e.clientY;

            if (!visible.current) {
                visible.current = true;
                // Jump to the pointer instead of sliding in from the corner.
                current.current.x = e.clientX;
                current.current.y = e.clientY;
                node.style.opacity = '1';
            }
        };

        const animate = () => {
            current.current.x += (target.current.x - current.current.x) * 0.15;
            current.current.y += (target.current.y - current.current.y) * 0.15;
            node.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
            raf.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        raf.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMove);
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, [enabled]);

    if (!enabled) return null;

    return (
        <div ref={cursorRef} className={styles.cursor} style={{ opacity: 0 }} aria-hidden="true">
            <div className={styles.dot} />
        </div>
    );
};

export default Cursor;
