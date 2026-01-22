import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import styles from './Certifications.module.css';

const Certifications: React.FC = () => {
    return (
        <section id="certifications" className="section">
            <div className="container">
                <div className={styles.header}>
                    <h2 className="text-gradient">Certifications</h2>
                    <p className="text-muted">Validated expertise from industry-leading institutions.</p>
                </div>

                <div className={styles.grid}>
                    {portfolioData.certifications.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className={styles.icon}>
                                <Award size={24} />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.name}>{cert.name}</h3>
                                <p className={styles.issuer}>{cert.issuer} • {cert.date}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
