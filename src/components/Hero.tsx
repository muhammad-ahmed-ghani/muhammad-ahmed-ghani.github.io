import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
    // Basic defensive check for image
    const profileImageUrl = "/Muhammad_ahmed_DP.webp";

    const scrollToNext = () => {
        const nextSection = document.getElementById('projects');
        if (nextSection) {
            // Get the element's position relative to the viewport
            const rect = nextSection.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const targetY = rect.top + scrollTop;
            
            // Smooth scroll to the target position
            window.scrollTo({
                top: targetY,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className={styles.hero}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.topSection}>
                        <motion.div
                            className={styles.reveal}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h1 className={styles.name}>
                                MUHAMMAD <br />
                                <span className="text-titanium">AHMED GHANI</span>
                            </h1>

                            <div className={styles.separator} />

                            <p className={styles.role}>
                                Lead Machine Learning Engineer <br />
                                & AI Solution Architect
                            </p>
                        </motion.div>

                        <motion.div
                            className={styles.imageContainer}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className={styles.imageWrapper}>
                                <img
                                    src={profileImageUrl}
                                    alt="Muhammad Ahmed Ghani"
                                    className={styles.profileImage}
                                    onError={(e) => {
                                        console.error("Hero: Profile image failed to load", e);
                                    }}
                                />
                                <div className={styles.imageOverlay} />
                            </div>
                        </motion.div>
                    </div>

                    <div className={styles.footer}>
                        <button 
                            className={styles.scrollHint}
                            onClick={scrollToNext}
                            aria-label="Scroll to next section"
                        >
                            <span>Enter the Odyssey</span>
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            >
                                <ChevronDown size={24} />
                            </motion.div>
                        </button>

                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <strong>5+ YRS</strong>
                                <span>Engineering</span>
                            </div>
                            <div className={styles.stat}>
                                <strong>25+ PRJ</strong>
                                <span>Deployment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
