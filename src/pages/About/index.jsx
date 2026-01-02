import React from 'react';
import PageContainer from '../../layouts/PageContainer';

const About = () => {
    return (
        <PageContainer>
            <div className="about-page" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '48px', borderBottom: '1px solid #e2e8f0', paddingBottom: '16px' }}>About Us</h1>

                {/* Company Overview */}
                <section style={{ marginBottom: '48px' }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', marginBottom: '24px', maxWidth: '70ch' }}>
                        <strong>KUN FAYA KUN Automation Engineering</strong> is a dedicated proprietorship firm engaged in the supply of high-quality industrial automation and electrical products. Operating from Chennai, Tamil Nadu, we serve a diverse range of industrial clients, including electrical panel builders, machine manufacturers, and infrastructure projects.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', maxWidth: '70ch' }}>
                        With years of experience in the field, we understand the critical nature of industrial components. Our mission is to provide reliable, specification-compliant products that ensure the safety and efficiency of your systems.
                    </p>
                </section>

                {/* Business Details */}
                <section style={{ marginBottom: '48px', backgroundColor: '#f8fafc', padding: '32px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h2 style={{ marginBottom: '24px', fontSize: '1.5rem' }}>Business Profile</h2>
                    <dl style={{ display: 'grid', gridTemplateColumns: 'minmax(150px, auto) 1fr', gap: '16px 24px' }}>
                        <dt style={{ fontWeight: '600', color: '#64748b' }}>Business Name</dt>
                        <dd style={{ fontWeight: '500', color: '#0f172a' }}>KUN FAYA KUN Automation Engineering</dd>

                        <dt style={{ fontWeight: '600', color: '#64748b' }}>Constitution</dt>
                        <dd style={{ fontWeight: '500', color: '#0f172a' }}>Proprietorship</dd>

                        <dt style={{ fontWeight: '600', color: '#64748b' }}>Proprietor</dt>
                        <dd style={{ fontWeight: '500', color: '#0f172a' }}>Mr. Syed Khaled Ahmed</dd>

                        <dt style={{ fontWeight: '600', color: '#64748b' }}>GSTIN</dt>
                        <dd style={{ fontWeight: '500', color: '#0f172a', overflowWrap: 'anywhere' }}>33FDVPM3696B1Z4</dd>

                        <dt style={{ fontWeight: '600', color: '#64748b' }}>Location</dt>
                        <dd style={{ fontWeight: '500', color: '#0f172a' }}>Chennai, Tamil Nadu</dd>

                        <dt style={{ fontWeight: '600', color: '#64748b' }}>Nature of Business</dt>
                        <dd style={{ fontWeight: '500', color: '#0f172a' }}>Industrial Automation & Electrical Supply</dd>
                    </dl>
                </section>

                {/* Values */}
                <section>
                    <h2 style={{ marginBottom: '24px', fontSize: '1.5rem' }}>Our Approach</h2>
                    <div style={{ display: 'grid', mdGridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                        <div style={{ marginBottom: '16px' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#0ea5e9' }}>Quality-Focused Sourcing</h3>
                            <p style={{ color: '#475569', lineHeight: '1.6' }}>We source products only from authorized and reputable manufacturers to guarantee performance and safety.</p>
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#0ea5e9' }}>Long-Term Relationships</h3>
                            <p style={{ color: '#475569', lineHeight: '1.6' }}>We believe in building lasting partnerships with our clients through honesty, transparency, and consistent service.</p>
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#0ea5e9' }}>Reliable Supply Chain</h3>
                            <p style={{ color: '#475569', lineHeight: '1.6' }}>Our efficient inventory and supply management ensure that your projects are not delayed by material shortages.</p>
                        </div>
                    </div>
                </section>
            </div>
        </PageContainer>
    );
};

export default About;
