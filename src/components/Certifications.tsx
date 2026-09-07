import React from 'react';
import { portfolioData } from '../data/portfolio';
import styles from './Certifications.module.css';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className={styles.section}>
      <div className="container">
        <div className="section-label">
          <span className="section-number">05</span>
          Credentials
        </div>

        <div className={styles.header}>
          <h2 className={`text-titanium ${styles.title}`}>Certifications</h2>
          <p className={styles.sub}>Courses and certifications completed.</p>
        </div>

        <div className={styles.list}>
          {portfolioData.certifications.map((cert, index) => (
            <div
              key={`${cert.name}-${index}`}
              className={styles.item}
              data-reveal
              style={{ '--reveal-delay': `${Math.min(index * 0.06, 0.3)}s` } as React.CSSProperties}
            >
              <span className={styles.num}>0{index + 1}</span>
              <div className={styles.itemContent}>
                <span className={styles.certName}>{cert.name}</span>
                <span className={styles.certIssuer}>{cert.issuer}</span>
              </div>
              <span className={styles.certDate}>{cert.date}</span>
              <div className={styles.check}>✓</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
