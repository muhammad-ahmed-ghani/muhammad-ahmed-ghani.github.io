import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './BentoGrid.module.css';

const BentoGrid: React.FC = () => {
    const items = [
        {
            title: 'ImagineArt 1.5',
            category: 'Generative AI',
            description: 'The global standard for photorealistic text-to-image synthesis.',
            link: 'https://www.imagine.art/image?modelListId=15',
            gridArea: '1 / 1 / 3 / 3',
        },
        {
            title: 'Imagine Shorts',
            category: 'Video Gen',
            description: 'AI-automated video creation for professional studios.',
            link: 'https://www.shorts.imagine.art/dashboard',
            gridArea: '1 / 3 / 2 / 5',
        },
        {
            title: 'Imagine Avatars',
            category: 'Computer Vision',
            description: 'High-fidelity AI persona generation and animation.',
            link: 'https://www.imagine.art/dashboard/avatars',
            gridArea: '2 / 3 / 3 / 4',
        },
        {
            title: 'Chatly AI',
            category: 'Agentic NLP',
            description: 'State-of-the-art Agentic solutions (GPT-4o/Claude).',
            link: 'https://chatlyai.app/',
            gridArea: '2 / 4 / 3 / 5',
        },
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <header className={styles.header}>
                    <h2 className="text-titanium">Portals of Innovation</h2>
                    <p className={styles.tagline}>High-fidelity AI research translated into production products.</p>
                </header>

                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <motion.a
                            key={item.title}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.card} glass`}
                            style={{ gridArea: item.gridArea }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <div className={styles.cardHeader}>
                                <span className={styles.category}>{item.category}</span>
                                <ArrowUpRight size={20} className={styles.linkIcon} />
                            </div>

                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDescription}>{item.description}</p>
                            </div>

                            <div className={styles.refraction} />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
