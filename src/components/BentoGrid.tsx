import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import styles from './BentoGrid.module.css';

const BentoGrid: React.FC = () => {
  const projects = portfolioData.projects;
  const featured = projects.find(p => p.featured)!;
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="projects" className={styles.section}>
      <div className="container">

        {/* Section label */}
        <div className="section-label">
          <span className="section-number">02</span>
          Selected Work
        </div>

        <div className={styles.header}>
          <h2 className={`text-titanium ${styles.title}`}>
            Models &amp;{' '}<br />Products
          </h2>
          <p className={styles.subtitle}>
            Research taken through{' '}<br />to shipped products.
          </p>
        </div>

        {/* Featured project */}
        <a
          href={featured.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.featured}
          data-reveal
        >
          <div className={styles.featuredBg} />
          <div className={styles.featuredContent}>
            <div className={styles.featuredTop}>
              <div className={styles.featuredMeta}>
                <span className={styles.projectId}>{featured.id}</span>
                <span className={styles.featuredBadge}>LATEST MODEL</span>
              </div>
              <ArrowUpRight size={28} className={styles.featuredArrow} />
            </div>
            <div className={styles.featuredBottom}>
              <p className={styles.category}>{featured.category}</p>
              <h3 className={styles.featuredTitle}>{featured.title}</h3>
              <p className={styles.featuredDesc}>{featured.description}</p>
            </div>
          </div>
          <div className={styles.featuredGlow} />
        </a>

        {/* Secondary grid */}
        <div className={styles.grid}>
          {rest.map((project, i) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              data-reveal
              style={{ '--reveal-delay': `${Math.min(i * 0.06, 0.24)}s` } as React.CSSProperties}
            >
              <div className={styles.cardTop}>
                <span className={styles.projectId}>{project.id}</span>
                <ArrowUpRight size={18} className={styles.cardArrow} />
              </div>
              <div className={styles.cardBody}>
                <p className={styles.category}>{project.category}</p>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
              </div>
              <div className={styles.cardLine} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
