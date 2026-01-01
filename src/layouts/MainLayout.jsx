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
            <main>
                <Outlet />
            </main>
            <footer>
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} Kun Faya Kun Automation Engineering. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
