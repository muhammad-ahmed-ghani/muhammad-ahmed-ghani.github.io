import React from 'react';
import { Github, Linkedin, Twitter, Calendar, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.cta}>
                        <span className={styles.category}>Next Step</span>
                        <h2 className={styles.ctaTitle}>
                            Ready to architect the <br />
                            <span className="text-gradient">future of AI?</span>
                        </h2>
                    </div>

                    <div className={styles.actions}>
                        <a href={portfolioData.personal.socials.calendly} target="_blank" rel="noopener noreferrer" className={styles.mainCta}>
                            <span>Book a Consultation</span>
                            <Calendar size={20} />
                        </a>
                        <a href={`mailto:${portfolioData.personal.email}`} className={styles.emailCta}>
                            {portfolioData.personal.email}
                        </a>
                        <a href={`tel:${portfolioData.personal.phone.replace(/\s/g, '')}`} className={styles.phoneCta}>
                            {portfolioData.personal.phone}
                        </a>
                    </div>
                </div>

                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>M.A.G</div>
                        <p className={styles.tagline}>{portfolioData.personal.role}</p>
                    </div>

                    <div className={styles.nav}>
                        <div className={styles.navCol}>
                            <h4>Navigation</h4>
                            <a href="#home" onClick={(e) => { 
                                e.preventDefault(); 
                                const element = document.querySelector('#home');
                                if (element) {
                                    const rect = element.getBoundingClientRect();
                                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                                    window.scrollTo({ top: rect.top + scrollTop, behavior: 'smooth' });
                                }
                            }}>Home</a>
                            <a href="#projects" onClick={(e) => { 
                                e.preventDefault(); 
                                const element = document.querySelector('#projects');
                                if (element) {
                                    const rect = element.getBoundingClientRect();
                                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                                    window.scrollTo({ top: rect.top + scrollTop, behavior: 'smooth' });
                                }
                            }}>Innovation</a>
                            <a href="#skills" onClick={(e) => { 
                                e.preventDefault(); 
                                const element = document.querySelector('#skills');
                                if (element) {
                                    const rect = element.getBoundingClientRect();
                                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                                    window.scrollTo({ top: rect.top + scrollTop, behavior: 'smooth' });
                                }
                            }}>Stack</a>
                            <a href="#certifications" onClick={(e) => { 
                                e.preventDefault(); 
                                const element = document.querySelector('#certifications');
                                if (element) {
                                    const rect = element.getBoundingClientRect();
                                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                                    window.scrollTo({ top: rect.top + scrollTop, behavior: 'smooth' });
                                }
                            }}>Certifications</a>
                        </div>
                        <div className={styles.navCol}>
                            <h4>Social</h4>
                            <a href={portfolioData.personal.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin size={18} /> LinkedIn <ArrowUpRight size={14} />
                            </a>
                            <a href={portfolioData.personal.socials.github} target="_blank" rel="noopener noreferrer">
                                <Github size={18} /> GitHub <ArrowUpRight size={14} />
                            </a>
                            <a href={portfolioData.personal.socials.twitter} target="_blank" rel="noopener noreferrer">
                                <Twitter size={18} /> Twitter <ArrowUpRight size={14} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Muhammad Ahmed Ghani. Engineered for excellence.</p>
                    <div className={styles.location}>
                        <span className={styles.dot} />
                        Available for Global Innovation
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
