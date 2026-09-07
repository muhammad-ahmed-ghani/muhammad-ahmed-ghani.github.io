/**
 * Smooth in-page navigation over native scroll.
 *
 * This previously proxied to the drei ScrollControls element captured on
 * window.__scrollEl. The page scrolls natively now, so anchors are handled by
 * the platform — which also means they work with JavaScript disabled, respect
 * the user's reduced-motion setting, and move keyboard focus correctly.
 */
export const scrollToId = (href: string) => {
  const id = href.startsWith('#') ? href.slice(1) : href;
  const section = document.getElementById(id);
  if (!section) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  section.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });

  // scrollIntoView alone does not move focus, which strands keyboard and
  // screen-reader users at the top of the document.
  section.setAttribute('tabindex', '-1');
  section.focus({ preventScroll: true });
};
