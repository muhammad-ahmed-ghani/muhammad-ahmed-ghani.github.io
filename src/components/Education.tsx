import React from 'react';
import { portfolioData } from '../data/portfolio';
import styles from './Experience.module.css';

/**
 * Academic credentials.
 *
 * This component existed but was never rendered by any parent, and it was
 * written against an older Experience.module.css — nine of the class names it
 * used no longer exist, so it would have rendered essentially unstyled. It now
 * mirrors the Experience timeline structure exactly.
 */
const Education: React.FC = () => {
    const { education } = portfolioData;

    return (
        <section id="education" className={styles.section}>
            <div className="container">
                <div className="section-label">
                    <span className="section-number">06</span>
                    Foundations
                </div>

                <div className={styles.header}>
                    <h2 className={`text-titanium ${styles.title}`}>Education</h2>
                    <p className={styles.sub}>Undergraduate study.</p>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.item} data-reveal>
                        <div className={styles.itemNum}>01</div>

                        <div className={styles.meta}>
                            <span className={styles.period}>{education.period}</span>
                            <span className={styles.company}>{education.university}</span>
                        </div>

                        <div className={styles.content}>
                            <h3 className={styles.role}>{education.degree}</h3>
                            <ul className={styles.details}>
                                <li className={styles.detail}>
                                    <span className={styles.detailDot} />
                                    <span>{education.location} · CGPA {education.cgpa}</span>
                                </li>
                                {education.details.map((detail, i) => (
                                    <li key={i} className={styles.detail}>
                                        <span className={styles.detailDot} />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
