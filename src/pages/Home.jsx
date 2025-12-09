import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const { data: products, error } = useFetch('https://fakestoreapi.com/products?limit=25');  

    if (error) return <div className="text-center">Error: {error.message}</div>;

    return (
        <div>
            <section className="banner" style={{height:'96vh'}}>
                <div className="container text-center">
                    <h1 className="display-4">Welcome to Outfique!</h1>
                    <p>Discover the latest fashion and trends. Shop now and get exclusive deals!</p>
                    <Link to="/products" className="btn btn-lg rounded-pill" style={{ backgroundColor: '#6f0b24ff', color: 'white' }}>Shop Now</Link>
                </div>
            </section>

            <section className="categories py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Shop by Category</h2>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <Link to="/products?category=clothing" className="category-link">
                                <img src="https://img.freepik.com/premium-photo/reduce-reuse-concept-preparing-clothes-swap-waste-problem-fashion-industry_89386-2510.jpg?w=2000" alt="Clothing" className="img-fluid rounded-circle mb-2" />
                                <h5>Clothing</h5>
                            </Link>
                        </div>
                        <div className="col-md-4 text-center">
                            <Link to="/products?category=jewelry" className="category-link">
                                <img src="https://tse4.mm.bing.net/th/id/OIP.sJuPYPx04Mx3-Ds9eQjmKwHaE8?w=1536&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Jewelry" className="img-fluid rounded-circle mb-2" />
                                <h5>Jewelry</h5>
                            </Link>
                        </div>
                        <div className="col-md-4 text-center">
                            <Link to="/products?category=accessories" className="category-link">
                                <img src="https://th.bing.com/th/id/R.446857457f75db15527d250c807c5bb9?rik=a9JHvM8sCC%2boJQ&pid=ImgRaw&r=0" alt="Accessories" className="img-fluid rounded-circle mb-2" />
                                <h5>Accessories</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featured-products py-5 bg-light">
              <div className="container">
                <h2 className="text-center mb-4">Featured Products</h2>
                <div className="product-list">
                  {products.slice(0, 8).map((product) => ( 
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                <div className="text-center mt-4">
                  <Link 
                    to="/products?section=featured" 
                    className="btn rounded-pill" 
                    style={{ backgroundColor: '#5e061cff', color: 'white' }}
                  >
                    View All Featured
                  </Link>
                </div>
              </div>
            </section>

            <section className="best-sellers py-5">
              <div className="container">
                <h2 className="text-center mb-4">Best Sellers</h2>
                <div className="product-list">
                  {products.slice(10, 18).map((product) => ( 
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                <div className="text-center mt-4">
                  <Link 
                    to="/products?section=best" 
                    className="btn rounded-pill" 
                    style={{ backgroundColor: 'rgb(111, 11, 36)', color:'white'}}
                  >
                    See All Best Sellers
                  </Link>
                </div>
              </div>
            </section>

            <section className="new-arrivals py-5 bg-light">
              <div className="container">
                <h2 className="text-center mb-4">New Arrivals</h2>
                <div className="product-list">
                  {products.slice(21, 25).map((product) => (  
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                <div className="text-center mt-4">
                  <Link 
                    to="/products?section=new" 
                    className="btn rounded-pill" 
                    style={{ backgroundColor: '#800020', color: 'white' }}
                  >
                    Explore All New Arrivals
                  </Link>
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
                      <Link to="/products?deal=true" className="btn rounded-pill" style={{ backgroundColor: '#800020', color: 'white' }}>Shop Deals</Link>
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


        <section className="reviews py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">What Our Customers Say</h2>
            <div className="row g-4">

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