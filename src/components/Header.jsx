import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{
                position: 'fixed',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)', // This will be handled by a wrapper or just careful width management
                width: '90%',
                maxWidth: '1000px',
                zIndex: 1000,
                x: '-50%' // Framer motion transform shortcut
            }}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px 40px',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                borderRadius: '50px',
                boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.1)' : '0 5px 15px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255,255,255,0.5)'
            }}>
                <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    color: 'var(--text-primary)'
                }}>
                    Arnold C. Amani
                </div>

                <nav className="desktop-nav">
                    <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
                        {['Accueil', 'À propos', 'Projets', 'Galerie', 'Contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item === 'Accueil' ? 'hero' : item === 'À propos' ? 'about' : item === 'Projets' ? 'latest-project' : item === 'Galerie' ? 'gallery' : 'contact'}`}
                                    style={{
                                        textTransform: 'uppercase',
                                        fontSize: '0.8rem',
                                        letterSpacing: '1px',
                                        fontWeight: '600',
                                        color: 'var(--text-primary)'
                                    }}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;
