import React, { useEffect, useRef, useState } from 'react';
import styles from './Cursor.module.css';

const Cursor: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | undefined>(undefined);
    const targetX = useRef(0);
    const targetY = useRef(0);
    const currentX = useRef(0);
    const currentY = useRef(0);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            targetX.current = e.clientX;
            targetY.current = e.clientY;
            if (!isVisible) setIsVisible(true);
        };

        const animate = () => {
            // Smooth interpolation using ease-out
            currentX.current += (targetX.current - currentX.current) * 0.15;
            currentY.current += (targetY.current - currentY.current) * 0.15;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${currentX.current}px, ${currentY.current}px)`;
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', moveCursor, { passive: true });
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [isVisible]);

    return (
        <div
            ref={cursorRef}
            className={styles.cursor}
            style={{
                opacity: isVisible ? 1 : 0,
            }}
        >
            <div className={styles.dot} />
        </div>
    );
};

export default Cursor;
