import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import styles from './SkillHive.module.css';

const SkillHive: React.FC = () => {
  const { ai_ml, languages, infrastructure } = portfolioData.skills.categorized;

  const categories = [
    { label: 'AI / ML', items: ai_ml },
    { label: 'Languages', items: languages },
    { label: 'Infrastructure', items: infrastructure },
  ];

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.03 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
  };

  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <div className="section-label">
          <span className="section-number">02</span>
          Technical Stack
        </div>

        <div className={styles.header}>
          <h2 className={`text-titanium ${styles.title}`}>The Arsenal</h2>
          <p className={styles.sub}>Precision tooling for production AI at scale.</p>
        </div>

        <div className={styles.categories}>
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              className={styles.category}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className={styles.catHeader}>
                <span className={styles.catNum}>0{ci + 1}</span>
                <h3 className={styles.catLabel}>{cat.label}</h3>
                <div className={styles.catLine} />
              </div>
              <div className={styles.badges}>
                {cat.items.map((skill) => (
                  <motion.span key={skill} className={styles.badge} variants={itemVariants}>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillHive;
