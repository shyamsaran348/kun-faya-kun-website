import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PageContainer from '../../layouts/PageContainer';
import TypesAvailable from '../../components/products/TypesAvailable';
import productsData from '../../data/products.json';
import categoriesData from '../../data/categories.json';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = productsData.find(p => p.id === id);

    // Redirect to products if not found (or could show a 404 message)
    // For now, we'll show a simple "Not Found" state
    if (!product) {
        return (
            <PageContainer>
                <div style={{ textAlign: 'center', padding: '48px' }}>
                    <h2>Product Not Found</h2>
                    <Link to="/products" style={{ color: '#0066cc', textDecoration: 'underline' }}>Back to Products</Link>
                </div>
            </PageContainer>
        );
    }

    const category = categoriesData.find(c => c.id === product.category);

    // Image fallback logic
    const handleImageError = (e) => {
        e.target.src = '/images/placeholders/product-placeholder.jpg';
    };

    return (
        <PageContainer>
            <div className="product-detail-page">
                {/* Breadcrumb */}
                <div className="breadcrumb">
                    <Link to="/products">All Products</Link>
                    {' > '}
                    <span>{category ? category.name : 'Uncategorized'}</span>
                </div>

                <div className="product-detail-layout">

                    {/* Main Content - Left Col (Image) */}
                    <div className="product-image-large">
                        <img
                            src={product.image || '/images/placeholders/product-placeholder.jpg'}
                            alt={product.name}
                            onError={handleImageError}
                        />
                    </div>

                    {/* Right Col (Info) */}
                    <div className="product-info-col">
                        <h1 className="product-title">{product.name}</h1>
                        <p className="product-description">
                            {product.description}
                        </p>

                        <TypesAvailable types={product.typesAvailable} />

                        {product.models && product.models.length > 0 && (
                            <div className="models-section">
                                <h3 style={{ marginBottom: '16px', fontSize: '1.1rem', color: '#0f172a' }}>Available Models</h3>
                                <div className="table-container">
                                    <table className="models-table">
                                        <thead>
                                            <tr>
                                                <th>Model Code</th>
                                                <th>Description</th>
                                                <th>Std. Packing</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {product.models.map((model, index) => (
                                                <tr key={index}>
                                                    <td style={{ fontWeight: 600, color: '#0f172a' }}>{model.code}</td>
                                                    <td>{model.description}</td>
                                                    <td>{model.stdPacking}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        <div className="product-cta">
                            <h3 style={{ marginBottom: '16px' }}>Interested in this product?</h3>
                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                <Link to="/contact" className="btn btn-primary">
                                    Contact us for Specifications
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default ProductDetail;
