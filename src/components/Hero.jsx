import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, 0.05, 0.01, 0.9],
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '100px',
            overflow: 'hidden',
            position: 'relative',
            backgroundImage: 'url(/artworks/art8.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed' // Parallax feel
        }}>
            {/* Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(249, 247, 242, 0.75)', // Reduced opacity to show more art
                backdropFilter: 'blur(5px)', // Soft blur on background
                zIndex: 1
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                >
                    <motion.p variants={itemVariants} style={{
                        fontSize: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '5px',
                        color: 'var(--text-secondary)',
                        marginBottom: '30px',
                        fontWeight: '600'
                    }}>
                        Artiste Peintre — Goma, RDC
                    </motion.p>

                    <motion.h1 variants={itemVariants} style={{
                        fontSize: 'clamp(4rem, 12vw, 9rem)', // Even larger
                        lineHeight: '0.85',
                        marginBottom: '40px',
                        marginLeft: '-5px' // Slight optical alignment
                    }}>
                        <span style={{ display: 'block', fontWeight: '300' }}>Arnold</span>
                        <span style={{ display: 'block', marginLeft: '5vw', fontStyle: 'italic' }}>Chibanguka</span>
                        <span style={{ display: 'block', marginLeft: '10vw', color: 'var(--accent-color)' }}>Amani</span>
                    </motion.h1>

                    <motion.div variants={itemVariants} style={{
                        marginTop: '60px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px',
                        marginLeft: 'auto',
                        marginRight: '5vw',
                        maxWidth: '500px'
                    }}>
                        <p style={{
                            fontSize: '1.3rem',
                            fontStyle: 'italic',
                            lineHeight: '1.6',
                            borderLeft: '2px solid var(--accent-color)',
                            paddingLeft: '20px'
                        }}>
                            "Capturing the resilience of the human spirit through the vibrancy of color."
                        </p>

                        {/* Social Links Area */}
                        <div style={{ display: 'flex', gap: '25px' }}>
                            {['Instagram', 'Facebook', 'LinkedIn', 'Twitter'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="hover-underline"
                                    style={{
                                        textTransform: 'uppercase',
                                        fontSize: '0.85rem',
                                        letterSpacing: '1px',
                                        fontWeight: '600',
                                        color: 'var(--text-primary)'
                                    }}
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
