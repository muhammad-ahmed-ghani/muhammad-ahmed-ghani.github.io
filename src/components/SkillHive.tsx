import React from 'react';
import { portfolioData } from '../data/portfolio';
import styles from './SkillHive.module.css';

const SkillHive: React.FC = () => {
  const { ai_ml, languages, infrastructure } = portfolioData.skills.categorized;

  const categories = [
    { label: 'AI / ML', items: ai_ml },
    { label: 'Languages', items: languages },
    { label: 'Infrastructure', items: infrastructure },
  ];

  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <div className="section-label">
          <span className="section-number">03</span>
          Technical Stack
        </div>

        <div className={styles.header}>
          <h2 className={`text-titanium ${styles.title}`}>The Stack</h2>
          <p className={styles.sub}>Tools used day to day.</p>
        </div>

        <div className={styles.categories}>
          {categories.map((cat, ci) => (
            <div
              key={cat.label}
              className={styles.category}
              data-reveal
              style={{ '--reveal-delay': `${ci * 0.1}s` } as React.CSSProperties}
            >
              <div className={styles.catHeader}>
                <span className={styles.catNum}>0{ci + 1}</span>
                <h3 className={styles.catLabel}>{cat.label}</h3>
                <div className={styles.catLine} />
              </div>
              <div className={styles.badges}>
                {cat.items.map((skill, si) => (
                  <span
                    key={skill}
                    className={styles.badge}
                    data-reveal
                    style={{ '--reveal-delay': `${Math.min(ci * 0.06 + si * 0.012, 0.5)}s` } as React.CSSProperties}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillHive;
