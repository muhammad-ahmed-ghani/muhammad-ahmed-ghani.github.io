import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className={styles.container}>
                <a href="#home" className={styles.logo}>
                    M<span className={styles.dot}>.</span> Ahmed Ghani
                </a>

                <ul className={styles.navLinks}>
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a href={item.href} className={styles.navLink}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu could be added here */}
            </div>
        </motion.nav>
    );
};

export default Navbar;
