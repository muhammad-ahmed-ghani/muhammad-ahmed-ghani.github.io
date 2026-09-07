import { useEffect } from 'react';

/**
 * Scroll-reveal that can never hide content.
 *
 * The rule this enforces: markup is visible by default. Elements marked
 * [data-reveal] only become hidden once this hook has confirmed, on the
 * client, that IntersectionObserver exists and motion is wanted — at which
 * point it sets `js-reveal` on <html> and the CSS takes over.
 *
 * That ordering matters. The page is prerendered to static HTML, so if the
 * hidden state were the default, every crawler and every visitor whose
 * JavaScript failed would get a blank page. Animation is strictly additive.
 *
 * Triggers are clamped: an element is revealed as soon as it intersects, and
 * once revealed it stays revealed — nothing re-hides on scroll-up.
 */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!targets.length) return;

    // Only now is it safe to let CSS hide anything.
    root.classList.add('js-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute('data-revealed', '');
          observer.unobserve(entry.target);
        }
      },
      // A little before the element arrives, so it is settled by the time it
      // is properly on screen.
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    targets.forEach((el) => {
      // Anything already on screen at load reveals immediately rather than
      // waiting for a scroll that may never come on a short viewport.
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.setAttribute('data-revealed', '');
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
      root.classList.remove('js-reveal');
    };
  }, []);
}
