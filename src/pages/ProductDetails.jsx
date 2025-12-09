import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
    const { id } = useParams();
    const { data: product, error } = useFetch(`https://fakestoreapi.com/products/${id}`);
    const { addToCart } = useContext(CartContext);

    const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : '');
    const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : '');

    if (error) return <div className="text-center">Error: {error.message}</div>;
    if (!product || !product.id) return <div className="text-center">Product not found.</div>;

    const handleAddToCart = () => {
        addToCart(product, selectedColor, selectedSize);
        alert('Added to cart!');
    };

    return (
        <div className="container py-5 datailed">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} className="img-fluid rounded shadow" />
                </div>
                <div className="col-md-6">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
                    <p><strong>Rating:</strong> {product.rating} ⭐</p>
                    <p><strong>Material:</strong> {product.material}</p>
                    <p><strong>Availability:</strong> {product.availability}</p>

                    {product.colors && (
                        <div className="mb-3">
                            <label className="form-label"><strong>Color:</strong></label>
                            <select
                                className="form-select"
                                value={selectedColor}
                                onChange={(e) => setSelectedColor(e.target.value)}
                            >
                                {product.colors.map((color, index) => (
                                    <option key={index} value={color}>{color}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {product.sizes && (
                        <div className="mb-3">
                            <label className="form-label"><strong>Size:</strong></label>
                            <select
                                className="form-select"
                                value={selectedSize}
                                onChange={(e) => setSelectedSize(e.target.value)}
                            >
                                {product.sizes.map((size, index) => (
                                    <option key={index} value={size}>{size}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    <button className="btn btn-lg rounded-pill" style={{ backgroundColor: '#800020', color: 'white' }} onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <h3>Product Details</h3>
                    <p>This product is made from high-quality materials and is perfect for everyday use. Check reviews below!</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
