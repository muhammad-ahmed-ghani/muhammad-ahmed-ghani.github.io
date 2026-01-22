import React from 'react';
import { Github, Linkedin, Twitter, MessageCircle, Calendar, Mail, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <h2 className={styles.name}>{portfolioData.personal.name}</h2>
                        <p className={styles.tagline}>{portfolioData.personal.role}</p>
                        <div className={styles.contactDetails}>
                            <a href={`mailto:${portfolioData.personal.email}`} className={styles.contactItem}>
                                <Mail size={16} /> {portfolioData.personal.email}
                            </a>
                            <a href={`tel:${portfolioData.personal.phone}`} className={styles.contactItem}>
                                <Phone size={16} /> {portfolioData.personal.phone}
                            </a>
                            <div className={styles.contactItem}>
                                <span className={styles.location}><MapPin size={16} /> {portfolioData.personal.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cta}>
                        <h3 className={styles.ctaTitle}>Let's build something world-class.</h3>
                        <div className={styles.ctaButtons}>
                            <a href={portfolioData.personal.socials.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                                <MessageCircle size={18} /> WhatsApp
                            </a>
                            <a href={portfolioData.personal.socials.calendly} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                                <Calendar size={18} /> Book a Call
                            </a>
                        </div>
                    </div>

                    <div className={styles.socials}>
                        <a href={portfolioData.personal.socials.github} target="_blank" rel="noopener noreferrer"><Github size={22} /></a>
                        <a href={portfolioData.personal.socials.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={22} /></a>
                        <a href={portfolioData.personal.socials.twitter} target="_blank" rel="noopener noreferrer"><Twitter size={22} /></a>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>&copy; {new Date().getFullYear()} {portfolioData.personal.name}. Built for the future of AI. {portfolioData.personal.location}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
