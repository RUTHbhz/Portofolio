import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#F7F3EB',
        padding: '80px 0',
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
    };

    return (
        <footer style={footerStyle}>
            <div className="container">

                <div style={{ marginBottom: '30px' }}>
                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginBottom: '10px' }}>Arnold Chibanguka Amani</h3>
                    <p>Goma, RDC</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '40px' }}>
                    {['Instagram', 'Facebook', 'LinkedIn', 'Twitter'].map((social) => (
                        <a
                            key={social}
                            href="#"
                            className="hover-underline"
                            style={{
                                textTransform: 'uppercase',
                                fontSize: '0.8rem',
                                letterSpacing: '1px',
                                fontWeight: '600',
                                color: 'var(--text-primary)'
                            }}
                        >
                            {social}
                        </a>
                    ))}
                </div>

                <p style={{ opacity: 0.6 }}>&copy; {new Date().getFullYear()} Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
