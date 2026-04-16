// Singleton that captures the drei ScrollControls scroll element,
// so non-canvas components (Navbar, Hero buttons) can scroll it.
let scrollEl: HTMLElement | null = null;

export const setScrollEl = (el: HTMLElement) => {
  scrollEl = el;
  // Also expose on window for the Navbar scroll-progress listener
  (window as any).__scrollEl = el;
};

export const scrollToId = (href: string) => {
  const id = href.startsWith('#') ? href.slice(1) : href;
  const section = document.getElementById(id);
  if (!section) return;

  if (scrollEl) {
    const elRect = scrollEl.getBoundingClientRect();
    const secRect = section.getBoundingClientRect();
    const target = secRect.top - elRect.top + scrollEl.scrollTop;
    scrollEl.scrollTo({ top: target, behavior: 'smooth' });
  } else {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
