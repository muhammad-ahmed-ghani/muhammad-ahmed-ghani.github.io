import React from 'react';
import { motion } from 'framer-motion';
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
          <span className="section-number">01</span>
          Selected Work
        </div>

        <div className={styles.header}>
          <h2 className={`text-titanium ${styles.title}`}>
            Portals of<br />Innovation
          </h2>
          <p className={styles.subtitle}>
            High-fidelity AI research translated<br />into products used by millions.
          </p>
        </div>

        {/* Featured project */}
        <motion.a
          href={featured.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.featured}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.featuredBg} />
          <div className={styles.featuredContent}>
            <div className={styles.featuredTop}>
              <div className={styles.featuredMeta}>
                <span className={styles.projectId}>{featured.id}</span>
                <span className={styles.featuredBadge}>FLAGSHIP MODEL</span>
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
        </motion.a>

        {/* Secondary grid */}
        <div className={styles.grid}>
          {rest.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
