import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';
import TextScramble from './TextScramble';
import AsciiGrid from './AsciiGrid';
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

const up = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
});

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
            <div className={styles.nameBlock}>
              <div className={styles.nameRow}>
                <TextScramble text="MUHAMMAD" delay={0.4} stagger={40} scrambleDuration={380} className={styles.nameLine} />
              </div>
              <div className={styles.nameRow}>
                <TextScramble text="AHMED" delay={0.72} stagger={50} scrambleDuration={400} className={`${styles.nameLine} ${styles.nameAccent}`} />
              </div>
              <div className={styles.nameRow}>
                <TextScramble text="GHANI" delay={1.0} stagger={46} scrambleDuration={390} className={styles.nameLine} />
              </div>
            </div>

            {/* Role */}
            <motion.div className={styles.roleBlock} {...up(1.4)}>
              <div className={styles.roleSep} />
              <p className={styles.role}>
                Lead Machine Learning Engineer<br />
                &amp; AI Solution Architect
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div className={styles.stats} {...up(1.65)}>
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
            </motion.div>

            {/* Location + CTA */}
            <motion.div className={styles.footerRow} {...up(1.9)}>
              <div className={styles.location}>
                <MapPin size={13} />
                Lahore, Pakistan
              </div>
              <button
                className={styles.scrollBtn}
                onClick={() => scrollToId('#projects')}
                aria-label="View Work"
              >
                <span>View Work</span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                >
                  <ArrowDown size={14} />
                </motion.div>
              </button>
            </motion.div>
          </div>

          {/* ── Image column ───────────────────────────────── */}
          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.imageFrame}>
              <div className={styles.imageGlow} />
              <img
                src="/Muhammad_ahmed_DP.webp"
                alt="Muhammad Ahmed Ghani"
                className={styles.image}
              />
              <div className={styles.imageOverlay} />
              <div className={styles.scanlines} aria-hidden="true" />
            </div>
            {/* Corner brackets */}
            <div className={`${styles.corner} ${styles.cornerTL}`} />
            <div className={`${styles.corner} ${styles.cornerBR}`} />
          </motion.div>
        </div>
      </div>

      {/* Marquee ticker */}
      <motion.div
        className={styles.marqueeWrap}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.1 }}
        aria-hidden="true"
      >
        <div className="marquee-track">
          {MARQUEE.map((item, i) => (
            <span key={i} className={item === '·' ? styles.marqueeDot : styles.marqueeItem}>
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
