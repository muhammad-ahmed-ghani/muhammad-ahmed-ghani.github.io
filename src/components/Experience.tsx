import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <div className="section-label">
          <span className="section-number">03</span>
          Career Path
        </div>

        <div className={styles.header}>
          <h2 className={`text-titanium ${styles.title}`}>The Timeline</h2>
          <p className={styles.sub}>Architecting precision at scale.</p>
        </div>

        <div className={styles.timeline}>
          {portfolioData.experience.slice(0, 3).map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              className={styles.item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Index number */}
              <div className={styles.itemNum}>0{index + 1}</div>

              {/* Meta */}
              <div className={styles.meta}>
                <span className={styles.period}>{exp.period}</span>
                <span className={styles.company}>{exp.company}</span>
              </div>

              {/* Content */}
              <div className={styles.content}>
                <h3 className={styles.role}>{exp.role}</h3>
                <ul className={styles.details}>
                  {exp.details.slice(0, 2).map((d, i) => (
                    <li key={i} className={styles.detail}>
                      <span className={styles.detailDot} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
