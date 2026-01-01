import React, { useMemo } from 'react';
import PageContainer from '../../layouts/PageContainer';
import ProductCard from '../../components/products/ProductCard';
import productsData from '../../data/products.json';
import categoriesData from '../../data/categories.json';

const Products = () => {
    // Memoize products grouped by category for efficient rendering
    const productsByCategory = useMemo(() => {
        const grouped = {};
        categoriesData.forEach(cat => {
            grouped[cat.id] = {
                meta: cat,
                items: productsData.filter(p => p.category === cat.id)
            };
        });
        return grouped;
    }, []);

    return (
        <PageContainer>
            <div className="products-page">
                <h1>Our Products</h1>
                <p style={{ marginBottom: '32px', fontSize: '1.1rem', color: '#64748b', maxWidth: '800px' }}>
                    Explore our range of industrial automation and electrical products designed to meet diverse application requirements across industries.
                </p>

                {categoriesData.map(category => {
                    const categoryProducts = productsByCategory[category.id].items;

                    if (categoryProducts.length === 0) return null;

                    return (
                        <section key={category.id} id={category.id} className="category-section">
                            <h2>
                                {category.name}
                            </h2>
                            <div className="product-grid">
                                {categoryProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </PageContainer>
    );
};

export default Products;
