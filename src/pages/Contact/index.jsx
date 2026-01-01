import React from 'react';
import PageContainer from '../../layouts/PageContainer';

const Contact = () => {
    return (
        <PageContainer>
            <div className="contact-page" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '48px', textAlign: 'center' }}>Contact Us</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', backgroundColor: 'white', padding: '48px', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>

                    {/* Company Name */}
                    <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                        <h2 style={{ fontSize: '1.75rem', color: '#0f172a', marginBottom: '8px' }}>KUN FAYA KUN Automation Engineering</h2>
                        <p style={{ color: '#64748b', fontWeight: '500' }}>Mr. Syed Khaled Ahmed (Proprietor)</p>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0' }} />

                    {/* Address */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', color: '#0ea5e9', marginBottom: '12px' }}>Registered Office</h3>
                        <address style={{ fontStyle: 'normal', color: '#334155', lineHeight: '1.6' }}>
                            18, Facing Sembudoss Street,<br />
                            Katchaleeswarar Agraharam,<br />
                            Mannady, Chennai – 600001,<br />
                            Tamil Nadu, India
                        </address>
                    </div>

                    {/* Business Info */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', color: '#0ea5e9', marginBottom: '12px' }}>Business Information</h3>
                        <p style={{ color: '#334155', marginBottom: '8px' }}>
                            <strong>GSTIN:</strong> 33FDVPM3696B1Z4
                        </p>
                        <p style={{ color: '#334155' }}>
                            <strong>Nature of Business:</strong> Proprietorship (Trading)
                        </p>
                    </div>

                    {/* Contact Details Placeholders */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', color: '#0ea5e9', marginBottom: '12px' }}>Get in Touch</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <p style={{ color: '#334155' }}>
                                <strong>Phone:</strong> <span style={{ color: '#334155' }}>8903680670</span>
                            </p>
                            <p style={{ color: '#334155' }}>
                                <strong>Email:</strong> <span style={{ color: '#94a3b8' }}>[Email Address Placeholder]</span>
                            </p>
                            <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '8px' }}>
                                * Please contact us for product enquiries, quotes, and specifications.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </PageContainer>
    );
};

export default Contact;
