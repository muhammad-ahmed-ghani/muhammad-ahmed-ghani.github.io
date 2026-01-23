import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <div className={styles.header}>
                    <h2 className="text-titanium">The Odyssey Timeline</h2>
                    <p className={styles.tagline}>Architecting precision at scale.</p>
                </div>

                <div className={styles.timeline}>
                    {portfolioData.experience.slice(0, 3).map((exp, index) => (
                        <motion.div
                            key={`${exp.company}-${index}`}
                            className={styles.item}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                        >
                            <div className={styles.meta}>
                                <span className={styles.period}>{exp.period}</span>
                                <span className={styles.company}>{exp.company}</span>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.role}>{exp.role}</h3>
                                <ul className={styles.details}>
                                    {exp.details.slice(0, 2).map((detail, idx) => (
                                        <li key={idx} className={styles.detailItem}>
                                            <span>{detail}</span>
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
