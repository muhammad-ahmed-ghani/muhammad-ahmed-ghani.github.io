import React, { useState, useEffect, useRef } from 'react';

// Characters used during the scramble phase
const POOL = '!@#$%&*[]{}|\\/<>+=-_?~^0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz░▒▓█▄▀■□▪▫';

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

const TextScramble: React.FC<Props> = ({
  text,
  delay = 0,
  scrambleDuration = 500,
  stagger = 55,
  className,
}) => {
  const [output, setOutput] = useState<string[]>(() =>
    text.split('').map(c => (c === ' ' ? ' ' : '░'))
  );
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const intervals = useRef<ReturnType<typeof setInterval>[]>([]);

  useEffect(() => {
    const chars = text.split('');

    const outer = setTimeout(() => {
      chars.forEach((finalChar, i) => {
        if (finalChar === ' ') return;

        const start = setTimeout(() => {
          const frames = Math.floor(scrambleDuration / 40);
          let f = 0;
          const iv = setInterval(() => {
            if (f >= frames) {
              setOutput(prev => {
                const next = [...prev];
                next[i] = finalChar;
                return next;
              });
              clearInterval(iv);
            } else {
              setOutput(prev => {
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

    return () => {
      timeouts.current.forEach(clearTimeout);
      intervals.current.forEach(clearInterval);
    };
  }, [text, delay, scrambleDuration, stagger]);

  return (
    <span className={className} aria-label={text}>
      {output.join('')}
    </span>
  );
};

export default TextScramble;
