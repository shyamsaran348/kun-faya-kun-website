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

                        <div className="product-cta">
                            <h3 style={{ marginBottom: '16px' }}>Interested in this product?</h3>
                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                <Link to="/contact" className="btn btn-primary">
                                    Contact us for Specifications
                                </Link>
                                <button type="button" className="btn btn-disabled" disabled>
                                    WhatsApp (Coming Soon)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default ProductDetail;
