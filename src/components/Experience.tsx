import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <div className={styles.header}>
                    <h2 className="text-gradient">Professional Experience</h2>
                    <p className="text-muted">Architecting production-grade AI systems and leading ML innovation.</p>
                </div>

                <div className={styles.timeline}>
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={`${exp.company}-${index}`}
                            className={styles.item}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <div className={styles.meta}>
                                <span className={styles.period}>{exp.period}</span>
                                <span className={styles.company}>{exp.company}</span>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.role}>{exp.role}</h3>
                                <ul className={styles.details}>
                                    {exp.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
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
