import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ backgroundColor: '#fff', overflow: 'hidden' }}>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ flex: '1 1 500px', paddingRight: '50px', marginBottom: '50px' }}
                >
                    <span style={{ color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                        L'Histoire
                    </span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '20px', marginBottom: '40px' }}>
                        Au-delà de la <br /> toile.
                    </h2>
                    <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '2' }}>
                        <p style={{ marginBottom: '30px' }}>
                            Né à <strong>Goma</strong> le <strong>15 décembre 2002</strong>, je construis mon art comme on construit une vie : avec résilience. Mon travail n'est pas une simple évasion, c'est une confrontation douce avec la réalité, une recherche constante de beauté dans le chaos.
                        </p>
                        <p>
                            Chaque œuvre est un chapitre, chaque couleur une respiration. Je vous invite à explorer cet univers merveilleux où la fragilité rencontre la force.
                        </p>
                    </div>
                </motion.div>

                {/* Visual Element (Asymmetrical Image) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ flex: '1 1 400px', position: 'relative' }}
                >
                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                        {/* Using one of the artworks as the "portrait" or feature image */}
                        <img
                            src="/artworks/art3.jpeg"
                            alt="Arnold Chibanguka Amani"
                            style={{ width: '100%', height: 'auto', display: 'block', filter: 'grayscale(20%) sepia(10%)' }}
                        />
                        {/* Decorative geometrical element */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-20px',
                            right: '-20px',
                            width: '150px',
                            height: '150px',
                            border: '2px solid var(--accent-color)',
                            zIndex: -1
                        }}></div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
