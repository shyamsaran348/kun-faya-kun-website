import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { id, name, image, description } = product;

    // Use placeholder if image path is not provided or fails (handled via onError in img tag, 
    // but for now we rely on the data providing a valid path or us falling back strictly if data is empty)
    // The locked strategy says JSON provides absolute path.
    // We can add a simple fallback logic inline.

    const handleImageError = (e) => {
        e.target.src = '/images/placeholders/product-placeholder.jpg';
    };

    return (
        <Link to={`/product/${id}`} className="product-card">
            <div className="product-image-container">
                <img
                    src={image || '/images/placeholders/product-placeholder.jpg'}
                    alt={name}
                    onError={handleImageError}
                />
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default ProductCard;
