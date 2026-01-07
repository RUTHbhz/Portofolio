import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NavigationOverlay = ({ isOpen, onClose }) => {
    const menuVariants = {
        closed: {
            opacity: 0,
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
        }
    };

    const linkVariants = {
        closed: { y: 80, opacity: 0 },
        open: (i) => ({
            y: 0,
            opacity: 1,
            transition: { delay: 0.3 + (i * 0.1), duration: 0.8, ease: [0.76, 0, 0.24, 1] }
        })
    };

    const links = [
        { title: "Accueil", href: "#hero" },
        { title: "L'Histoire", href: "#about" },
        { title: "Galerie", href: "#gallery" },
        { title: "Contact", href: "#contact" }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="nav-overlay"
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'var(--text-primary)',
                        zIndex: 2000,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#F9F7F2'
                    }}
                >
                    <button
                        onClick={onClose}
                        className="interactive"
                        style={{
                            position: 'absolute',
                            top: '40px',
                            right: '40px',
                            background: 'none',
                            border: 'none',
                            color: '#F9F7F2',
                            fontSize: '1.2rem',
                            cursor: 'none',
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                        }}
                    >
                        Fermer
                    </button>

                    <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                        {links.map((link, i) => (
                            <div key={i} style={{ overflow: 'hidden' }}>
                                <motion.a
                                    href={link.href}
                                    custom={i}
                                    variants={linkVariants}
                                    onClick={onClose}
                                    className="interactive"
                                    style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                                        color: '#F9F7F2',
                                        textDecoration: 'none',
                                        display: 'block',
                                        cursor: 'none'
                                    }}
                                    whileHover={{ x: 20, color: 'var(--accent-color)' }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {link.title}
                                </motion.a>
                            </div>
                        ))}
                    </nav>

                    <div style={{ position: 'absolute', bottom: '50px', display: 'flex', gap: '30px', color: 'rgba(255,255,255,0.5)' }}>
                        <span>Instagram</span>
                        <span>LinkedIn</span>
                        <span>Email</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default NavigationOverlay;
