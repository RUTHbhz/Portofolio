import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
    const [selectedId, setSelectedId] = useState(null);

    const artworks = [
        { id: 1, src: '/artworks/art1.jpeg', title: 'Harmonie Discrète', height: '400px' },
        { id: 2, src: '/artworks/art2.jpeg', title: 'Lueurs de Goma', height: '500px' },
        { id: 3, src: '/artworks/art3.jpeg', title: 'Résilience', height: '350px' },
        { id: 4, src: '/artworks/art4.jpeg', title: 'Aube Nouvelle', height: '450px' },
        { id: 5, src: '/artworks/art5.jpeg', title: 'Douce Mélancolie', height: '600px' },
        { id: 6, src: '/artworks/art6.jpeg', title: 'Vibrations', height: '400px' },
        { id: 7, src: '/artworks/art7.jpeg', title: 'Horizon', height: '300px' },
    ];

    return (
        <section id="gallery" className="section-padding" style={{ backgroundColor: 'var(--bg-color)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        marginBottom: '60px',
                        textAlign: 'left'
                    }}
                >
                    Selected Works
                </motion.h2>

                {/* CSS Masonry Layout */}
                <div style={{
                    columnCount: 3,
                    columnGap: '20px',
                    // Responsive columns handled via media queries in CSS if needed, 
                    // but inline style for simplicity here:
                    '@media (max-width: 768px)': { columnCount: 1 } // Note: Inline media queries don't work, will handle in index.css or use a wrapper
                }} className="masonry-grid">
                    {artworks.map((art) => (
                        <motion.div
                            layoutId={`card-${art.id}`}
                            key={art.id}
                            onClick={() => setSelectedId(art.id)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{
                                marginBottom: '20px',
                                breakInside: 'avoid',
                                position: 'relative',
                                cursor: 'none' // Custom cursor used
                            }}
                            className="interactive"
                        >
                            <motion.img
                                src={art.src}
                                alt={art.title}
                                style={{
                                    width: '100%',
                                    borderRadius: '4px',
                                    display: 'block'
                                }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            />
                            <div style={{ marginTop: '8px' }}>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>0{art.id} — {art.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0,0,0,0.9)',
                                zIndex: 2000,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '20px'
                            }}
                        >
                            <motion.div
                                layoutId={`card-${selectedId}`}
                                style={{ maxWidth: '90%', maxHeight: '90vh' }}
                                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                            >
                                {(() => {
                                    const art = artworks.find(a => a.id === selectedId);
                                    return (
                                        <div style={{ textAlign: 'center' }}>
                                            <img
                                                src={art.src}
                                                alt={art.title}
                                                style={{ maxHeight: '80vh', maxWidth: '100%', objectFit: 'contain', borderRadius: '4px' }}
                                            />
                                            <h3 style={{ color: '#fff', marginTop: '20px', fontSize: '1.5rem' }}>{art.title}</h3>
                                            <button
                                                onClick={() => setSelectedId(null)}
                                                className="interactive"
                                                style={{
                                                    marginTop: '20px',
                                                    background: 'transparent',
                                                    border: '1px solid #fff',
                                                    color: '#fff',
                                                    padding: '10px 30px',
                                                    borderRadius: '20px',
                                                    cursor: 'none'
                                                }}
                                            >
                                                Fermer
                                            </button>
                                        </div>
                                    );
                                })()}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Gallery;
