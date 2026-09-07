import { useEffect, useRef } from 'react';

/**
 * Native-scroll progress in the range [0, 1], stored in a ref.
 *
 * Deliberately ref-based: this is read every frame inside useFrame by the
 * WebGL backdrop, so it must never trigger a React re-render. Updated from a
 * passive scroll listener, coalesced into a single rAF per frame.
 */
export function useScrollProgress() {
  const progress = useRef(0);

  useEffect(() => {
    let frame = 0;

    const read = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      progress.current = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(read);
    };

    read();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return progress;
}
