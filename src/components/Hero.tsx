import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Sparkles, Brain, Code, Cpu } from 'lucide-react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.container}>
                <motion.div
                    className={styles.visual}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'backOut' }}
                >
                    <div className={styles.imageWrapper}>
                        <img
                            src={portfolioData.personal.image}
                            alt={portfolioData.personal.name}
                            className={styles.profileImage}
                        />
                        <motion.div
                            className={styles.floatingAward}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                        >
                            <Sparkles className={styles.awardIcon} />
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className={styles.badgeRow}>
                        <span className={styles.pill}><Brain size={12} /> AI Solution Architect</span>
                        <span className={styles.pill}><Cpu size={12} /> Lead ML Engineer</span>
                        <span className={styles.pill}><Code size={12} /> 5+ Years Experience</span>
                    </div>

                    <h1 className={styles.title}>
                        <span className={styles.greeting}>Architecting</span> <br />
                        <span className="text-gradient">Intelligent Media</span>
                    </h1>

                    <p className={styles.description}>
                        {portfolioData.personal.summary}
                    </p>

                    <div className={styles.ctaGroup}>
                        <motion.a
                            href="#projects"
                            className={styles.primaryBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Impactful Work
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className={styles.secondaryBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get in Touch
                        </motion.a>
                    </div>

                    <div className={styles.punchyTagline}>
                        "Pioneering Generative AI & Agentic Systems"
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
