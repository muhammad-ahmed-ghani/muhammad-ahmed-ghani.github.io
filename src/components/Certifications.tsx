import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Award, CheckCircle } from 'lucide-react';
import styles from './Certifications.module.css';

const Certifications: React.FC = () => {
    return (
        <section id="certifications" className="section">
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.category}>Validations</span>
                    <h2 className="text-gradient">Professional Certs</h2>
                    <p className="text-secondary">Continuous learning and industry-recognized certifications.</p>
                </div>

                <div className={styles.grid}>
                    {portfolioData.certifications.map((cert, index) => (
                        <motion.div
                            key={`${cert.name}-${index}`}
                            className={`${styles.certCard} glass glass-hover`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <div className={styles.iconWrapper}>
                                <Award size={20} />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.certName}>{cert.name}</h3>
                                <div className={styles.meta}>
                                    <span className={styles.issuer}>{cert.issuer}</span>
                                    <span className={styles.divider}>•</span>
                                    <span className={styles.date}>{cert.date}</span>
                                </div>
                            </div>
                            <div className={styles.check}>
                                <CheckCircle size={14} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
