import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, Zap, Sparkles } from 'lucide-react';
import styles from './BentoGrid.module.css';

const BentoGrid: React.FC = () => {
    const items = [
        {
            title: 'ImagineArt 1.5',
            description: 'Industry-leading text-to-image model. Flawless text and extreme realism.',
            type: 'featured',
            link: 'https://www.imagine.art/imagine-1-5',
            icon: <Sparkles size={24} />,
            gridArea: '1 / 1 / 3 / 3',
        },
        {
            title: 'Imagine Shorts',
            description: 'Pioneered AI video generation for professional creative studios.',
            type: 'project',
            link: 'https://www.imagine.art/dashboard/video-studio',
            icon: <Zap size={20} />,
            gridArea: '1 / 3 / 2 / 5',
        },
        {
            title: 'Imagine Avatars',
            description: 'High-fidelity AI persona generation and animation.',
            type: 'project',
            link: 'https://www.imagine.art/dashboard/avatars',
            icon: <Layers size={20} />,
            gridArea: '2 / 3 / 3 / 4',
        },
        {
            title: 'Chatly',
            description: 'State-of-the-art Agentic AI solution with top-notch LLMs.',
            type: 'project',
            link: 'https://chatlyai.app/',
            icon: <Zap size={20} />,
            gridArea: '2 / 4 / 3 / 5',
        },
        {
            title: '5+ Years Exp',
            description: 'Building production-grade AI systems at scale.',
            type: 'stat',
            gridArea: '3 / 1 / 4 / 2',
        },
        {
            title: '25+ Projects',
            description: 'Deployed on AWS, GCP, and specialized ML cloud platforms.',
            type: 'stat',
            gridArea: '3 / 2 / 4 / 3',
        },
        {
            title: 'Technical Arsenal',
            description: 'Python, MLOps, CUDA, LLMOps, GenAI, Speech Processing.',
            type: 'skills',
            gridArea: '3 / 3 / 4 / 5',
        },
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <div className={styles.header}>
                    <h2 className="text-gradient">Core Contributions</h2>
                    <p className="text-muted">High-impact AI solutions and architectural achievements.</p>
                </div>

                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className={`${styles.card} ${styles[item.type]}`}
                            style={{ gridArea: item.gridArea }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.cardContent}>
                                <div className={styles.cardIcon}>{item.icon}</div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDescription}>{item.description}</p>
                                {item.link && (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        Live Demo <ExternalLink size={14} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
