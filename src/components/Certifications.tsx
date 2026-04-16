import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import styles from './Certifications.module.css';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className={styles.section}>
      <div className="container">
        <div className="section-label">
          <span className="section-number">04</span>
          Credentials
        </div>

        <div className={styles.header}>
          <h2 className={`text-titanium ${styles.title}`}>Certifications</h2>
          <p className={styles.sub}>Industry-recognized validation of deep expertise.</p>
        </div>

        <div className={styles.list}>
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={`${cert.name}-${index}`}
              className={styles.item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.num}>0{index + 1}</span>
              <div className={styles.itemContent}>
                <span className={styles.certName}>{cert.name}</span>
                <span className={styles.certIssuer}>{cert.issuer}</span>
              </div>
              <span className={styles.certDate}>{cert.date}</span>
              <div className={styles.check}>✓</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
