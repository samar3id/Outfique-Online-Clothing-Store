import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} className="img-fluid" />
            <h3>{product.title}</h3>
            <p>{product.description.substring(0, 100)}...</p>
            <p>${product.price.toFixed(2)}</p>
            <button className="btn me-2 rounded-pill" style={{ backgroundColor: '#7993b7ff', color: 'white' }} onClick={() => addToCart(product)}>Add to Cart</button>
            <Link to={`/product/${product.id}`} className="btn rounded-pill" style={{ backgroundColor: '#6c7378ff', color: 'white' }}>View Details</Link>
        </div>
    );
};

export default ProductCard;
