import React from 'react';

const Contact = () => {
    const sectionStyle = {
        // padding handled by CSS class
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
    };

    const buttonStyle = {
        display: 'inline-block',
        padding: '15px 40px',
        backgroundColor: 'var(--accent-color)',
        color: '#fff',
        borderRadius: '30px',
        marginTop: '30px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
    };

    return (
        <section id="contact" style={sectionStyle} className="section-padding">
            <div className="container">
                <h2>Contactez Arnold</h2>
                <p style={{ marginTop: '20px', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                    Pour toute demande de renseignement, collaboration ou acquisition d'œuvre.
                </p>
                <a href="mailto:contact@arnoldamani.com" style={buttonStyle}>Envoyer un Message</a>
            </div>
        </section>
    );
};

export default Contact;
