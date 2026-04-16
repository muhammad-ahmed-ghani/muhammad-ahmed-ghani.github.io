import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { scrollToId } from '../utils/scrollStore';
import styles from './Navbar.module.css';

const navItems = [
  { name: 'Work', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Timeline', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Listen on the drei scroll element if captured, else window
    const getScrollEl = () =>
      (window as any).__scrollEl as HTMLElement | null;

    const onScroll = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      const scrollTop = el.scrollTop ?? window.scrollY;
      const docHeight = el.scrollHeight - el.clientHeight;
      setScrolled(scrollTop > 40);
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    // Poll until the drei scroll element is available
    let attempts = 0;
    const poll = setInterval(() => {
      const el = getScrollEl();
      if (el) {
        el.addEventListener('scroll', onScroll, { passive: true });
        clearInterval(poll);
      }
      if (++attempts > 40) clearInterval(poll);
    }, 200);

    return () => {
      clearInterval(poll);
      const el = getScrollEl();
      if (el) el.removeEventListener('scroll', onScroll);
    };
  }, []);

  const goto = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(href);
  };

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Scroll progress bar */}
      <div className={styles.progressBar} style={{ width: `${progress}%` }} />

      <div className={styles.inner}>
        <a
          href="#home"
          className={styles.logo}
          onClick={(e) => goto(e, '#home')}
        >
          M<span className={styles.accentDot}>.</span>A
          <span className={styles.accentDot}>.</span>G
        </a>

        <ul className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {navItems.map((item, i) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={styles.link}
                onClick={(e) => goto(e, item.href)}
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
    </motion.nav>
  );
};

export default Navbar;
