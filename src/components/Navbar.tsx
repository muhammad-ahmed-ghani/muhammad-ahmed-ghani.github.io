import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToId } from '../utils/scrollStore';
import styles from './Navbar.module.css';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Timeline', href: '#experience' },
  { name: 'Writing', href: '/writing/' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Previously this polled every 200ms for the drei ScrollControls element on
    // window.__scrollEl. The page scrolls natively now, so read the document
    // directly and coalesce updates into one rAF per frame.
    let frame = 0;

    const read = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 40);
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
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

  const goto = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(href);
  };

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}
      aria-label="Primary"
    >
      {/* Scroll progress bar */}
      <div className={styles.progressBar} aria-hidden="true" style={{ width: `${progress}%` }} />

      <div className={styles.inner}>
        <a
          href="#home"
          className={styles.logo}
          onClick={(e) => goto(e, '#home')}
        >
          M<span className={styles.accentDot}>.</span>A
          <span className={styles.accentDot}>.</span>G
        </a>

        <ul id="primary-navigation" className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {navItems.map((item, i) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={styles.link}
                onClick={item.href.startsWith('#') ? (e) => goto(e, item.href) : undefined}
              >
                <span className={styles.linkNum}>0{i + 1}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.right}>
          <a
            href="https://calendly.com/muhammad-ahmad-ghani/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Let's Talk
          </a>
          <button
            className={styles.burger}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
