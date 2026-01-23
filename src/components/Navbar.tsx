import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    const navItems = [
        { name: 'Odyssey', href: '#home' },
        { name: 'Portals', href: '#projects' },
        { name: 'Arsenal', href: '#skills' },
        { name: 'Timeline', href: '#experience' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
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

                <ul className={styles.navLinks}>
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

                <div className={styles.indicator}>
                    <div className={styles.dot} />
                    <span>System Online</span>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
