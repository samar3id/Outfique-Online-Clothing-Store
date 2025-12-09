import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                        <div className="footer-section col-lg-3 col-md-6 col-11">
                            <h3>About Outfique</h3>
                            <p>
                                Outfique is your go-to destination for trendy, elegant fashion pieces.  
                                We aim to provide a smooth shopping experience with high-quality products  
                                and excellent customer support.
                            </p>
                        </div>

                        <div className="footer-section col-lg-3 col-md-6 col-11">
                            <h3>Customer Service</h3>
                            <ul>
                                <li><Link to={'/login'}>Login</Link></li>
                                <li><Link to={'/products'}>Products</Link></li>
                                <li><Link to={'/contact'}>Contact Us</Link></li>
                                <li><Link to={'/about'}>About Us</Link></li>
                            </ul>
                        </div>

                        <div className="footer-section col-lg-3 col-md-6 col-11">
                            <h3>Shop</h3>
                            <ul>
                                <li><Link to={'/products?category=clothing'}>Clothing</Link></li>
                                <li><Link to={'/products?category=jewelry'}>Jewelry</Link></li>
                                <li><Link to={'/products?category=accessories'}>Accessories</Link></li>
                                <li><Link to={'/products?section=featured'}>Featured</Link></li>
                                <li><Link to={'/products?section=best'}>Best Sellers</Link></li>
                                <li><Link to={'/products?section=new'}>New Arrivals</Link></li>
                            </ul>
                        </div>

                        <div className="footer-section col-lg-3 col-md-6 col-11">
                            <h3>Follow Us</h3>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/" className="icon"><i className="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com/" className="icon"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.tiktok.com/" className="icon"><i className="fab fa-tiktok"></i></a>
                                <a href="https://www.youtube.com/" className="icon"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                

            <div className="footer-bottom">
                <p>&copy; 2025 Outfique. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
