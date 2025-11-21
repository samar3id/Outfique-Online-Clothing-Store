import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import ProductCard from '../components/ProductCard';

const Home = () => {
    // جلب المزيد من المنتجات للصفحة الرئيسية
    const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products?limit=20'); // جلب 20 منتجًا

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center">Error: {error.message}</div>;

    return (
        <div>
            {/* بانر كبير */}
            <section className="hero-banner text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4">Welcome to Outfique!</h1>
                    <p className="lead">Discover the latest fashion and trends. Shop now and get exclusive deals!</p>
                    <Link to="/products" className="btn btn-lg rounded-pill" style={{ backgroundColor: '#6f0b24ff', color: 'white' }}>Shop Now</Link>
                </div>
            </section>

            {/* فئات المنتجات */}
            <section className="categories py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Shop by Category</h2>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <Link to="/products" className="category-link">
                                <img src="https://img.freepik.com/premium-photo/reduce-reuse-concept-preparing-clothes-swap-waste-problem-fashion-industry_89386-2510.jpg?w=2000" alt="Clothing" className="img-fluid rounded-circle mb-2" />
                                <h5>Clothing</h5>
                            </Link>
                        </div>
                        <div className="col-md-4 text-center">
                            <Link to="/products" className="category-link">
                                <img src="https://tse4.mm.bing.net/th/id/OIP.sJuPYPx04Mx3-Ds9eQjmKwHaE8?w=1536&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Jewelry" className="img-fluid rounded-circle mb-2" />
                                <h5>Jewelry</h5>
                            </Link>
                        </div>
                        <div className="col-md-4 text-center">
                            <Link to="/products" className="category-link">
                                <img src="https://th.bing.com/th/id/R.446857457f75db15527d250c807c5bb9?rik=a9JHvM8sCC%2boJQ&pid=ImgRaw&r=0" alt="Accessories" className="img-fluid rounded-circle mb-2" />
                                <h5>Accessories</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* منتجات مميزة */}
            <section className="featured-products py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Featured Products</h2>
                    <div className="product-list">
                        {products.slice(0, 8).map((product) => ( // عرض 8 منتجات
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/products" className="btn rounded-pill" style={{ backgroundColor: '#5e061cff', color: 'white' }}>View All Products</Link>
                    </div>
                </div>
            </section>

            {/* أفضل المبيعات */}
            <section className="best-sellers py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Best Sellers</h2>
                    <div className="product-list">
                        {products.slice(8, 16).map((product) => ( // عرض 8 منتجات أخرى
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/products" className="btn rounded-pill" style={{ backgroundColor: '#f0abe1ff', color: 'black' }}>See More Best Sellers</Link>
                    </div>
                </div>
            </section>

            {/* جديد الوصول */}
            <section className="new-arrivals py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">New Arrivals</h2>
                    <div className="product-list">
                        {products.slice(16, 20).map((product) => ( // عرض 4 منتجات جديدة
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/products" className="btn rounded-pill" style={{ backgroundColor: '#800020', color: 'white' }}>Explore New Arrivals</Link>
                    </div>
                </div>
            </section>

            <section className="deals py-5">
  <div className="container">
    <h2 className="text-center mb-4">Special Deals</h2>
    <div className="row">

      <div className="col-md-6">
        <div className="deal-card first text-red p-4 rounded">
          <h4>Up to 30% Off!</h4>
          <p>Limited time offer on selected items.</p>
          <Link to="/products" className="btn rounded-pill" style={{ backgroundColor: '#800020', color: 'white' }}>Shop Deals</Link>
        </div>
      </div>

      <div className="col-md-6">
        <div className="deal-card second text-black p-4 rounded">
          <h4>Free Shipping</h4>
          <p>On orders over $50. Shop now!</p>
          <Link to="/products" className="btn rounded-pill" style={{ backgroundColor: '#FFD700', color: 'black' }}>Start Shopping</Link>
        </div>
      </div>

    </div>
  </div>
</section>


            {/* آراء العملاء */}
<section className="reviews py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-5">What Our Customers Say</h2>
    <div className="row g-4">

      {/* Review 1 */}
      <div className="col-md-4">
        <div className="review-card p-4 text-center shadow rounded bg-white">
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="customer" 
            className="rounded-circle mb-3"
            width="80"
            height="80"
          />
          <p className="mb-2">"Amazing quality and fast delivery! Highly recommend."</p>
          <h6 className="text-muted">Ahmed — Cairo</h6>
        </div>
      </div>

      {/* Review 2 */}
      <div className="col-md-4">
        <div className="review-card p-4 text-center shadow rounded bg-white">
          <img 
            src="https://randomuser.me/api/portraits/women/44.jpg" 
            alt="customer" 
            className="rounded-circle mb-3"
            width="80"
            height="80"
          />
          <p className="mb-2">"Love the styles. Outfique is my go-to for fashion."</p>
          <h6 className="text-muted">Sara — Alexandria</h6>
        </div>
      </div>

      {/* Review 3 */}
      <div className="col-md-4">
        <div className="review-card p-4 text-center shadow rounded bg-white">
          <img 
            src="https://randomuser.me/api/portraits/men/76.jpg" 
            alt="customer" 
            className="rounded-circle mb-3"
            width="80"
            height="80"
          />
          <p className="mb-2">"Great customer service and trendy products."</p>
          <h6 className="text-muted">Mohamed — Giza</h6>
        </div>
      </div>

    </div>
  </div>
</section>

        </div> 
        
    );
};

export default Home;
