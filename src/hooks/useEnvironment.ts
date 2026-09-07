import { useEffect, useState } from 'react';

export interface Environment {
  /** Resolved once on the client. False during SSR/prerender and first paint. */
  ready: boolean;
  reducedMotion: boolean;
  coarsePointer: boolean;
  /** Small viewport, low core count, low memory, or no WebGL. */
  lowPower: boolean;
  webgl: boolean;
}

const INITIAL: Environment = {
  ready: false,
  reducedMotion: false,
  coarsePointer: false,
  lowPower: false,
  webgl: false,
};

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl2') || canvas.getContext('webgl'))
    );
  } catch {
    return false;
  }
}

/**
 * Client-only capability detection.
 *
 * Every field stays at its conservative default during prerender, so the
 * server-rendered markup is identical for every visitor and hydration cannot
 * mismatch. The heavy WebGL backdrop only mounts once this reports ready.
 */
export function useEnvironment(): Environment {
  const [env, setEnv] = useState<Environment>(INITIAL);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointerQuery = window.matchMedia('(pointer: coarse)');
    const webgl = detectWebGL();

    const evaluate = () => {
      const nav = navigator as Navigator & {
        deviceMemory?: number;
        hardwareConcurrency?: number;
      };
      const memory = nav.deviceMemory ?? 8;
      const cores = nav.hardwareConcurrency ?? 8;

      const next: Environment = {
        ready: true,
        reducedMotion: motionQuery.matches,
        coarsePointer: pointerQuery.matches,
        lowPower:
          !webgl ||
          window.innerWidth < 1024 ||
          pointerQuery.matches ||
          memory <= 4 ||
          cores <= 4,
        webgl,
      };

      // Only re-render when something actually changed. Returning a fresh
      // object on every resize tick re-rendered every consumer — including
      // the WebGL backdrop — continuously while the window was being dragged.
      setEnv((prev) =>
        prev.ready === next.ready &&
        prev.reducedMotion === next.reducedMotion &&
        prev.coarsePointer === next.coarsePointer &&
        prev.lowPower === next.lowPower &&
        prev.webgl === next.webgl
          ? prev
          : next
      );
    };

    evaluate();

    // Coalesce resize bursts into one evaluation per frame.
    let frame = 0;
    const onResize = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        evaluate();
      });
    };

    motionQuery.addEventListener('change', evaluate);
    pointerQuery.addEventListener('change', evaluate);
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      motionQuery.removeEventListener('change', evaluate);
      pointerQuery.removeEventListener('change', evaluate);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return env;
}
