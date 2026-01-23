import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const navItems = [
        { name: 'Odyssey', href: '#home' },
        { name: 'Portals', href: '#projects' },
        { name: 'Arsenal', href: '#skills' },
        { name: 'Timeline', href: '#experience' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            // Get the element's position relative to the viewport
            const rect = element.getBoundingClientRect();
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
        <motion.nav
            className={styles.navbar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
        >
            <div className={styles.container}>
                <a href="#home" className={styles.logo} onClick={(e) => handleNavClick(e, '#home')}>
                    M<span className={styles.dot}>.</span>A<span className={styles.dot}>.</span>G
                </a>

                <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.navLinksOpen : ''}`}>
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a 
                                href={item.href} 
                                className={styles.navLink}
                                onClick={(e) => handleNavClick(e, item.href)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={styles.rightSection}>
                    <div className={styles.indicator}>
                        <div className={styles.dot} />
                        <span className={styles.indicatorText}>System Online</span>
                    </div>
                    <button 
                        className={styles.mobileMenuButton}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
