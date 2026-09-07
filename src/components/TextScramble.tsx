import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

// Characters used during the scramble phase
const POOL = '!@#$%&*[]{}|\\/<>+=-_?~^0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz░▒▓█▄▀■□▪▫';

// useLayoutEffect warns when it runs during server rendering; fall back to
// useEffect there, where it is a no-op anyway.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface Props {
  text: string;
  /** seconds before the animation starts */
  delay?: number;
  /** ms each individual character scrambles before locking */
  scrambleDuration?: number;
  /** ms between each character starting its scramble */
  stagger?: number;
  className?: string;
}

/**
 * Scramble-in text.
 *
 * The initial state is the REAL text, not the block-glyph placeholder it used
 * to be. That placeholder was serialised straight into the prerendered HTML,
 * so every crawler read the hero as "░░░░░░░░" instead of the name — the most
 * valuable term on the page.
 *
 * The scramble is now applied on the client in a layout effect, before the
 * browser paints, so the animation looks identical while the served markup
 * always contains real, indexable text. Under prefers-reduced-motion the text
 * simply stays put.
 */
const TextScramble: React.FC<Props> = ({
  text,
  delay = 0,
  scrambleDuration = 500,
  stagger = 55,
  className,
}) => {
  const [output, setOutput] = useState<string[]>(() => text.split(''));
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const intervals = useRef<ReturnType<typeof setInterval>[]>([]);

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const chars = text.split('');

    // Hide into blocks before first paint, then run the reveal.
    setOutput(chars.map((c) => (c === ' ' ? ' ' : '░')));

    const outer = setTimeout(() => {
      chars.forEach((finalChar, i) => {
        if (finalChar === ' ') return;

        const start = setTimeout(() => {
          const frames = Math.floor(scrambleDuration / 40);
          let f = 0;
          const iv = setInterval(() => {
            if (f >= frames) {
              setOutput((prev) => {
                const next = [...prev];
                next[i] = finalChar;
                return next;
              });
              clearInterval(iv);
            } else {
              setOutput((prev) => {
                const next = [...prev];
                next[i] = POOL[Math.floor(Math.random() * POOL.length)];
                return next;
              });
              f++;
            }
          }, 40);
          intervals.current.push(iv);
        }, i * stagger);

        timeouts.current.push(start);
      });
    }, delay * 1000);

    timeouts.current.push(outer);

    const pendingTimeouts = timeouts.current;
    const pendingIntervals = intervals.current;
    return () => {
      pendingTimeouts.forEach(clearTimeout);
      pendingIntervals.forEach(clearInterval);
      // Never leave the component stuck mid-scramble.
      setOutput(text.split(''));
    };
  }, [text, delay, scrambleDuration, stagger]);

  return (
    <span className={className} aria-label={text}>
      {output.join('')}
    </span>
  );
};

export default TextScramble;
