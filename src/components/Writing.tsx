import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import styles from './Writing.module.css';

const articles = [
  {
    number: '01',
    title: 'Leading the ImagineArt 2.0 Model Programme',
    summary: 'The research scope behind true-to-life realism, prompt understanding, precise text and cinematic control.',
    href: '/writing/imagineart-2-0-model-programme/',
    meta: 'Case study · ImagineArt 2.0',
  },
  {
    number: '02',
    title: 'Building ImagineArt 2.0 Edit',
    summary: 'A unified image-grounded model for composition, identity preservation, product placement and style transfer.',
    href: '/writing/imagineart-2-0-edit/',
    meta: 'Case study · Image Editing',
  },
  {
    number: '03',
    title: 'ImagineArt 1.5 Pro and Native 4K',
    summary: 'How a realism-focused model and its inference pipeline delivered professional 4K generation at production speed.',
    href: '/writing/imagineart-1-5-pro-native-4k/',
    meta: 'Case study · Model & Inference',
  },
];

const Writing: React.FC = () => (
  <section id="writing" className={styles.section}>
    <div className="container">
      <div className="section-label">
        <span className="section-number">07</span>
        Model Case Studies
      </div>

      <div className={styles.headingRow} data-reveal>
        <div>
          <h2>Writing</h2>
          <p>First-person accounts of leading and building the ImagineArt in-house model line.</p>
        </div>
        <a href="/writing/" className={styles.archiveLink}>
          All articles <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>

      <div className={styles.list}>
        {articles.map((article, index) => (
          <article
            className={styles.article}
            key={article.href}
            data-reveal
            style={{ '--reveal-delay': `${index * 0.07}s` } as React.CSSProperties}
          >
            <span className={styles.number}>{article.number}</span>
            <div className={styles.copy}>
              <p className={styles.meta}>{article.meta}</p>
              <h3><a href={article.href}>{article.title}</a></h3>
              <p className={styles.summary}>{article.summary}</p>
            </div>
            <a href={article.href} className={styles.readLink} aria-label={`Read ${article.title}`}>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Writing;
