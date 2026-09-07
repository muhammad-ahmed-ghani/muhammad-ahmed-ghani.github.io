import React from 'react';
import { portfolioData } from '../data/portfolio';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <div className="section-label">
          <span className="section-number">04</span>
          Career Path
        </div>

        <div className={styles.header}>
          <h2 className={`text-titanium ${styles.title}`}>Experience</h2>
          <p className={styles.sub}>Where the work has happened.</p>
        </div>

        <div className={styles.timeline}>
          {portfolioData.experience.slice(0, 3).map((exp, index) => (
            <div
              key={`${exp.company}-${index}`}
              className={styles.item}
              data-reveal
              style={{ '--reveal-delay': `${Math.min(index * 0.08, 0.24)}s` } as React.CSSProperties}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
