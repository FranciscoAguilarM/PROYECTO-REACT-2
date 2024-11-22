import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p className="footer__text">© 2024 Donaciones. Todos los derechos reservados.</p>
                <div className="footer__social-links">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer__link">
                        <i className="fab fa-facebook-f"></i> Facebook
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer__link">
                        <i className="fab fa-twitter"></i> Twitter
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer__link">
                        <i className="fab fa-instagram"></i> Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
