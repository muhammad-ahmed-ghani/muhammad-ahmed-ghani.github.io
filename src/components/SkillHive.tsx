import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import styles from './SkillHive.module.css';

const SkillHive: React.FC = () => {
    const allSkills = portfolioData.skills.hive;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.02,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1 },
    };

    return (
        <section id="skills" className="section">
            <div className="container">
                <div className={styles.header}>
                    <h2 className="text-titanium">The Technical Arsenal</h2>
                    <p className={styles.tagline}>Precision tooling for production AI.</p>
                </div>

                <motion.div
                    className={styles.hive}
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {allSkills.map((skill, index) => (
                        <motion.span
                            key={`${skill}-${index}`}
                            className={`${styles.skillBadge} glass`}
                            variants={item}
                        >
                            <div className={styles.indicator} />
                            {skill}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillHive;
