import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import styles from './Experience.module.css'; // Reusing Experience styles for consistency

const Education: React.FC = () => {
    const edu = portfolioData.education;
    return (
        <section id="education" className="section">
            <div className="container">
                <div className={styles.header}>
                    <h2 className="text-gradient">Academic Foundation</h2>
                    <p className="text-muted">High-impact educational background in Computer Science.</p>
                </div>

                <div className={styles.timeline}>
                    <motion.div
                        className={styles.item}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.meta}>
                            <span className={styles.period}>{edu.period}</span>
                            <span className={styles.company}>{edu.university}</span>
                        </div>
                        <div className={styles.content}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <GraduationCap size={20} color="var(--text-dim)" />
                                <h3 className={styles.role}>{edu.degree}</h3>
                            </div>
                            <p style={{ color: 'white', fontWeight: 600, marginBottom: '12px' }}>CGPA: {edu.cgpa}</p>
                            <ul className={styles.details}>
                                {edu.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
