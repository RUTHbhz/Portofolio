import React from 'react';
import { motion } from 'framer-motion';

const FeaturedProject = () => {
    return (
        <section id="latest-project" className="section-padding" style={{ backgroundColor: '#F0EBE0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: '60px', textAlign: 'center' }}
                >
                    <span style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', color: 'var(--accent-color)' }}>Exclusivité</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginTop: '10px' }}>Dernier Projet</h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img src="/artworks/art9.jpeg" alt="Latest Project 1" style={{ width: '100%', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>Écho du Silence</h3>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <img src="/artworks/art10.jpeg" alt="Latest Project 2" style={{ width: '100%', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>Lumière Intérieure</h3>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default FeaturedProject;
