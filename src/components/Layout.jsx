import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    const layoutStyle = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    };

    const mainStyle = {
        flex: '1',
    };

    return (
        <div style={layoutStyle}>
            <Header />
            <main style={mainStyle}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
