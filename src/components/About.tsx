import React from 'react';
import { portfolioData } from '../data/portfolio';
import styles from './About.module.css';

/**
 * Prose profile.
 *
 * This section exists for a specific reason: AI crawlers fetch the page
 * without executing JavaScript and, per current testing, do not extract
 * JSON-LD on a direct fetch either. Whatever they can quote has to be real
 * visible text. Before this section the page carried roughly 3.7k characters,
 * almost all of it short labels and headings — very little an assistant could
 * cite when asked who this person is.
 *
 * The writing follows what actually earns citations: the full proper noun in
 * the opening words rather than a pronoun, each paragraph self-contained
 * enough to stand alone as a retrieved passage, concrete figures carrying an
 * explicit as-of date, and question-shaped subheadings that match how people
 * phrase the query.
 */
const About: React.FC = () => {
    const { personal } = portfolioData;

    return (
        <section id="about" className={styles.section}>
            <div className="container">
                <div className="section-label">
                    <span className="section-number">01</span>
                    Profile
                </div>

                <div className={styles.grid}>
                    <div data-reveal>
                        <h2 className="sr-only">About Muhammad Ahmed Ghani</h2>

                        <p className={styles.lede}>
                            <strong>Muhammad Ahmed Ghani</strong> is an AI Research Lead and
                            Machine Learning Lead at <strong>ImagineArt</strong>, based in
                            Islamabad, Pakistan. He directs the model programme behind{' '}
                            <span className={styles.accent}>ImagineArt 2.0</span>,{' '}
                            <span className={styles.accent}>ImagineArt 1.5 Pro</span> and{' '}
                            <span className={styles.accent}>ImagineArt 1.5</span> — text-to-image
                            models built for photorealism and accurate text rendering.
                        </p>

                        <p className={styles.body}>
                            The work spans generative image, video, speech and agentic systems:
                            model architecture and training, evaluation, distillation and
                            quantisation, and the inference infrastructure that serves those
                            models in production. As of{' '}
                            <time dateTime="2026-09">September 2026</time>, systems he has led
                            are used by more than two million people.
                        </p>

                        <p className={styles.body}>
                            Before ImagineArt came five years across Ekkel AI, Kodezi and
                            Sigmetec — leading a team of five through more than twenty projects
                            in speech processing, natural language processing and computer
                            vision, and building the MLOps foundations for AI developer tooling
                            as a founding engineer. Originally from Lahore, where he read
                            computer science at the University of Central Punjab.
                        </p>
                    </div>

                    <div className={styles.faq} data-reveal style={{ '--reveal-delay': '0.1s' } as React.CSSProperties}>
                        <div>
                            <h3 className={styles.q}>What does Muhammad Ahmed Ghani work on?</h3>
                            <p className={styles.a}>
                                Generative models, end to end. Diffusion and flow-matching image
                                models, video generation with temporal consistency, speech
                                systems, and agentic AI — from first experiment through training,
                                evaluation and production inference.
                            </p>
                        </div>

                        <div>
                            <h3 className={styles.q}>Who built ImagineArt 2.0?</h3>
                            <p className={styles.a}>
                                Muhammad Ahmed Ghani led its architecture and training at
                                ImagineArt. These are team-built systems — ImagineArt 1.5 was
                                built with a team of seven ML engineers, and 1.5 Pro added native
                                4K generation and finer micro-detail.
                            </p>
                        </div>

                        <div>
                            <h3 className={styles.q}>Where is he based, and is he available?</h3>
                            <p className={styles.a}>
                                Islamabad, Pakistan — originally from Lahore — working with
                                teams globally. Open to research collaboration, consulting and
                                speaking, at{' '}
                                <a href={`mailto:${personal.email}`}>{personal.email}</a>{' '}
                                or{' '}
                                <a href={`mailto:${personal.personalEmail}`}>
                                    {personal.personalEmail}
                                </a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
