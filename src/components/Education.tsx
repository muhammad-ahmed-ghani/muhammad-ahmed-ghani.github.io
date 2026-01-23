import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { GraduationCap, MapPin } from 'lucide-react';
import styles from './Experience.module.css'; // Reusing experience styles for consistency

const Education: React.FC = () => {
    const { education } = portfolioData;

    return (
        <section id="education" className="section">
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.category}>Foundations</span>
                    <h2 className="text-gradient">Academic Credentials</h2>
                    <p className="text-secondary">A solid foundation in computer science and artificial intelligence.</p>
                </div>

                <div className={styles.timeline} style={{ maxWidth: '800px' }}>
                    <motion.div
                        className={styles.item}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.marker}>
                            <div className={styles.markerInner}>
                                <GraduationCap size={16} />
                            </div>
                        </div>

                        <div className={`${styles.card} glass glass-hover`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.meta}>
                                    <h3 className={styles.role}>{education.degree}</h3>
                                    <div className={styles.companyRow}>
                                        <span className={styles.company}>{education.university}</span>
                                        <span className={styles.divider}>•</span>
                                        <span className={styles.period}>{education.period}</span>
                                    </div>
                                    <div className={styles.companyRow} style={{ marginTop: '4px', opacity: 0.7 }}>
                                        <MapPin size={14} />
                                        <span>{education.location}</span>
                                        <span className={styles.divider}>•</span>
                                        <span>CGPA: {education.cgpa}</span>
                                    </div>
                                </div>
                            </div>

                            <ul className={styles.details}>
                                {education.details.map((detail, idx) => (
                                    <li key={idx} className={styles.detailItem}>
                                        <span className={styles.bullet}>→</span>
                                        <p>{detail}</p>
                                    </li>
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
