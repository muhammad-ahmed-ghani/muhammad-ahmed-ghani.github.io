import React from 'react';
import { ArrowDown, MapPin } from 'lucide-react';
import TextScramble from './TextScramble';
import AsciiGrid from './AsciiGrid';
import { portfolioData } from '../data/portfolio';
import { scrollToId } from '../utils/scrollStore';
import styles from './Hero.module.css';

const MARQUEE = [
  'Generative AI', '·', 'ImagineArt 2.0', '·', 'Computer Vision', '·',
  'MLOps', '·', 'Agentic Systems', '·', 'LLMs', '·', 'Model Architecture', '·',
  'Production AI', '·', 'Neural Networks', '·', 'PyTorch', '·', 'Stable Diffusion', '·',
  'Generative AI', '·', 'ImagineArt 2.0', '·', 'Computer Vision', '·',
  'MLOps', '·', 'Agentic Systems', '·', 'LLMs', '·', 'Model Architecture', '·',
  'Production AI', '·', 'Neural Networks', '·', 'PyTorch', '·', 'Stable Diffusion', '·',
];

const Hero: React.FC = () => (
  <section id="home" className={styles.hero}>
    {/* Ambient ASCII grid */}
    <div className={styles.asciiBg}><AsciiGrid /></div>
    {/* Background watermark */}
    <div className={styles.watermark} aria-hidden="true">AI</div>

    <div className={styles.outerLayout}>
      <div className="container">
        <div className={styles.layout}>

          {/* ── Text column ────────────────────────────────── */}
          <div className={styles.textCol}>

            {/* Name — ASCII scramble reveal */}
            {/* The page's single h1. It carries the full name as real text so
                it is the first and strongest term any crawler reads. */}
            <h1 className={styles.nameBlock}>
              <span className={styles.nameRow}>
                <TextScramble text="MUHAMMAD" delay={0.4} stagger={40} scrambleDuration={380} className={styles.nameLine} />
              </span>{' '}
              <span className={styles.nameRow}>
                <TextScramble text="AHMED" delay={0.72} stagger={50} scrambleDuration={400} className={`${styles.nameLine} ${styles.nameAccent}`} />
              </span>{' '}
              <span className={styles.nameRow}>
                <TextScramble text="GHANI" delay={1.0} stagger={46} scrambleDuration={390} className={styles.nameLine} />
              </span>
            </h1>

            {/* Role */}
            <div className={styles.roleBlock}>
              <div className={styles.roleSep} />
              <p className={styles.role}>
                AI Research Lead<br />
                &amp; Machine Learning Lead at ImagineArt
              </p>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
              {[
                { n: '5+',  label: 'Years Engineering' },
                { n: '25+', label: 'Production Projects' },
                { n: '2M+', label: 'Users Reached' },
              ].map((s, i) => (
                <React.Fragment key={s.n}>
                  {i > 0 && <div className={styles.statDiv} />}
                  <div className={styles.stat}>
                    <strong>{s.n}</strong>
                    <span>{s.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* Location + CTA */}
            <div className={styles.footerRow}>
              <div className={styles.location}>
                <MapPin size={13} aria-hidden="true" />
                {portfolioData.personal.location}
              </div>
              {/* An anchor, not a button: crawlers follow href, and it works
                  with JavaScript disabled. */}
              <a
                className={styles.scrollBtn}
                href="#projects"
                onClick={(e) => { e.preventDefault(); scrollToId('#projects'); }}
              >
                <span>View Work</span>
                <span className={styles.bounce} aria-hidden="true">
                  <ArrowDown size={14} />
                </span>
              </a>
            </div>
          </div>

          {/* ── Image column ───────────────────────────────── */}
          <div className={styles.imageCol}>
            <div className={styles.imageFrame}>
              <div className={styles.imageGlow} />
              <img
                src="/Muhammad_ahmed_DP.webp"
                alt="Muhammad Ahmed Ghani — AI Research Lead at ImagineArt"
                className={styles.image}
                width={1024}
                height={1024}
                fetchPriority="high"
                decoding="async"
              />
              <div className={styles.imageOverlay} />
              <div className={styles.scanlines} aria-hidden="true" />
            </div>
            {/* Corner brackets */}
            <div className={`${styles.corner} ${styles.cornerTL}`} />
            <div className={`${styles.corner} ${styles.cornerBR}`} />
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className={styles.marqueeWrap} aria-hidden="true">
        <div className="marquee-track">
          {MARQUEE.map((item, i) => (
            <span key={i} className={item === '·' ? styles.marqueeDot : styles.marqueeItem}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
