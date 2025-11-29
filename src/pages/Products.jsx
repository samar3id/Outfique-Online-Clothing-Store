
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import useFetch from '../hooks/useFetch';

const Products = () => {
    const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products');
    const [search, setSearch] = useState('');

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <div className="text-center">Loading products...</div>;
    if (error) return <div className="text-center">Error loading products: {error.message}</div>;

    return (
        <div className="container">
            <h1>Products</h1>
            <div className="input-group mb-3"> 
                <span className="input-group-text">🔍</span> 
                <input
                    type="text"
                    placeholder="" 
                    className="form-control"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="product-list">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
