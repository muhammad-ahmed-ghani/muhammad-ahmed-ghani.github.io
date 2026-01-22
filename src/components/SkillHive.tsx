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
                staggerChildren: 0.05,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 },
    };

    return (
        <section id="skills" className="section">
            <div className="container">
                <div className={styles.header}>
                    <h2 className="text-gradient">Technical Arsenal</h2>
                    <p className="text-muted">A comprehensive showcase of specialized expertise in AI and Engineering.</p>
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
                            className={styles.skillBadge}
                            variants={item}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                borderColor: 'white'
                            }}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillHive;
