import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../../layouts/PageContainer';
import categoriesData from '../../data/categories.json';

const Home = () => {
    return (
        <PageContainer>
            <div className="home-page">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-brand-container">
                        <img
                            src="/images/logo/kun-faya-kun-logo.jpg"
                            alt="Kun Faya Kun Automation Engineering Logo"
                            className="hero-logo"
                        />
                        <div className="hero-brand-text">
                            <h1 className="hero-company-name">
                                KUN FAYA KUN <br />
                                <span className="hero-company-sub">Automation Engineering</span>
                            </h1>
                            <p className="hero-gstin">GSTIN: 33FDVPM3696B1Z4</p>
                        </div>
                    </div>

                    <div className="hero-content">
                        <h2 className="hero-tagline">
                            Industrial Automation & Electrical Solutions
                        </h2>
                        <p className="hero-description">
                            Supplying a wide range of industrial automation and electrical products with consistent professionalism and reliable quality.
                        </p>
                        <div className="hero-cta-group">
                            <Link to="/products" className="btn btn-primary">
                                View Products
                            </Link>
                            <Link to="/contact" className="btn btn-outline" style={{ border: '1px solid white', color: 'white' }}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Company Snapshot */}
                <section style={{ marginBottom: '64px', textAlign: 'center', maxWidth: '900px', margin: '0 auto 64px auto' }}>
                    <h2 style={{ marginBottom: '24px' }}>Who We Are</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
                        KUN FAYA KUN Automation Engineering is a Chennai-based industrial supplier specializing in automation and electrical components for manufacturing, infrastructure, and engineering applications. Established as a dedicated industrial partner, we focus on delivering quality products that keep your operations running smoothly.
                    </p>
                </section>

                {/* Key Strengths */}
                <section style={{ marginBottom: '64px', backgroundColor: '#f1f5f9', padding: '48px 24px', borderRadius: '8px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '32px' }}>Why Choose Us</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
                        <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Wide Range</h3>
                            <p>Comprehensive selection of industrial automation and switchgear products.</p>
                        </div>
                        <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Authorized Quality</h3>
                            <p>Trusted sourcing from reputable manufacturers ensuring genuine components.</p>
                        </div>
                        <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Professional Service</h3>
                            <p>Dedicated support for industrial requirements and procurement teams.</p>
                        </div>
                        <div style={{ background: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Reliable Partnership</h3>
                            <p>Building long-term relationships through consistent supply and integrity.</p>
                        </div>
                    </div>
                </section>

                {/* Categories Preview */}
                <section>
                    <h2 style={{ textAlign: 'center', marginBottom: '32px' }}>Product Categories</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                        {categoriesData.map(cat => (
                            <Link key={cat.id} to={`/products#${cat.id}`} style={{
                                display: 'block',
                                padding: '24px',
                                backgroundColor: 'white',
                                border: '1px solid #e2e8f0',
                                borderRadius: '8px',
                                fontWeight: '600',
                                color: '#334155',
                                textAlign: 'center',
                                transition: 'all 0.2s ease'
                            }}
                                onMouseEnter={(e) => { e.target.style.borderColor = '#0ea5e9'; e.target.style.color = '#0ea5e9'; }}
                                onMouseLeave={(e) => { e.target.style.borderColor = '#e2e8f0'; e.target.style.color = '#334155'; }}
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '32px' }}>
                        <Link to="/products" style={{ color: '#0ea5e9', fontWeight: 'bold', textDecoration: 'underline' }}>View All Products</Link>
                    </div>
                </section>
            </div>
        </PageContainer>
    );
};

export default Home;
