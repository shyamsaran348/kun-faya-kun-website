import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const MainLayout = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <div className="main-layout">
            <header>
                <div className="header-content">
                    <Link to="/" className="logo">
                        <img src="/images/logo/kun-faya-kun-logo.jpg" alt="Kun Faya Kun Logo" />
                        <span>KUN FAYA KUN</span>
                    </Link>
                    <nav>
                        <ul>
                            <li><Link to="/" className={isActive('/')}>Home</Link></li>
                            <li><Link to="/about" className={isActive('/about')}>About</Link></li>
                            <li><Link to="/products" className={isActive('/products')}>Products</Link></li>
                            <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="page-fade-in">
                <Outlet />
            </main>
            <footer className="main-footer">
                <div className="footer-content">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <h3 className="footer-title">KUN FAYA KUN</h3>
                            <p className="footer-desc">
                                Your trusted partner for industrial automation and electrical components.
                                Quality, reliability, and service you can count on.
                            </p>
                        </div>
                        <div className="footer-links">
                            <h4 className="footer-heading">Quick Links</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/products">Products</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer-contact">
                            <h4 className="footer-heading">Contact Us</h4>
                            <p><strong>Phone:</strong> <a href="tel:918903680670">+91 89036 80670</a></p>
                            <p><strong>Email:</strong> <a href="mailto:kunfayakun.ae@gmail.com">kunfayakun.ae@gmail.com</a></p>
                            <p><strong>Location:</strong> Chennai, Tamil Nadu</p>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Kun Faya Kun Automation Engineering. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
