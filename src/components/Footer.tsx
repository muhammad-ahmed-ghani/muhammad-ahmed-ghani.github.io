import React from 'react';
import { Github, Linkedin, Twitter, Calendar, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { scrollToId } from '../utils/scrollStore';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const goto = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToId(href);
  };

  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">

        {/* CTA Block */}
        <div className={styles.cta}>
          <div className="section-label">
            <span className="section-number">05</span>
            Get In Touch
          </div>

          <h2 className={styles.ctaHeading}>
            Let's architect<br />
            <span className="text-titanium">the future of AI.</span>
          </h2>

          <div className={styles.ctaActions}>
            <a
              href={portfolioData.personal.socials.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <Calendar size={18} />
              Book a Consultation
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className={styles.btnSecondary}
            >
              {portfolioData.personal.email}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom grid */}
        <div className={styles.bottom}>
          <div className={styles.brand}>
            <div className={styles.logo}>M.A.G</div>
            <p className={styles.tagline}>{portfolioData.personal.role}</p>
          </div>

          <nav className={styles.nav}>
            <div className={styles.navGroup}>
              <h4 className={styles.navHeading}>Navigate</h4>
              {[
                { label: 'Home', href: '#home' },
                { label: 'Work', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Timeline', href: '#experience' },
              ].map(item => (
                <a key={item.href} href={item.href} onClick={(e) => goto(e, item.href)} className={styles.navLink}>
                  {item.label}
                </a>
              ))}
            </div>

            <div className={styles.navGroup}>
              <h4 className={styles.navHeading}>Connect</h4>
              <a href={portfolioData.personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className={styles.navLink}>
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href={portfolioData.personal.socials.github} target="_blank" rel="noopener noreferrer" className={styles.navLink}>
                <Github size={14} /> GitHub
              </a>
              <a href={portfolioData.personal.socials.twitter} target="_blank" rel="noopener noreferrer" className={styles.navLink}>
                <Twitter size={14} /> Twitter
              </a>
            </div>
          </nav>
        </div>

        {/* Copyright bar */}
        <div className={styles.bar}>
          <p>&copy; {new Date().getFullYear()} Muhammad Ahmed Ghani</p>
          <div className={styles.status}>
            <span className={styles.statusDot} />
            Available for Global Collaboration
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
