import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

const Products = () => {
  const [search, setSearch] = useState('');
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const category = query.get('category');
  const section = query.get('section');
  const deals = query.get('deal'); 

  let displayedProducts = productsData;

  if (deals === 'true') {
    displayedProducts = displayedProducts.filter(p => p.deal === true);
  }

  if (section === 'featured') {
    displayedProducts = productsData.slice(0, 10);
  } 
  else if (section === 'best') {
    displayedProducts = productsData.slice(10, 20);
  } 
  else if (section === 'new') {
    displayedProducts = productsData.slice(20, 25);
  }

  if (category) {
    displayedProducts = displayedProducts.filter(
      p => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  const filteredProducts = displayedProducts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container pro">
      <h1>
        {deals === "true"
          ? "Special Deals"
          : section
          ? section.toUpperCase()
          : category
          ? category.toUpperCase()
          : "All Products"}
      </h1>

      <div className="input-group mb-3">
        <span className="input-group-text">🔍</span>
        <input
          type="text"
          placeholder="Search products..."
          className="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
