import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import ShoppingCart from './pages/ShoppingCart';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Admin from './pages/Admin';
import Page404 from './components/Page404';
import Checkout from './pages/Checkout';
import ThemeProvider from './context/ThemeContext'; 

const App = () => {
    return (
        <ThemeProvider>
            <div className="app-wrapper">
                <Router>
                    <Header />
                    <div className="content-wrapper">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/product/:id" element={<ProductDetails />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/cart" element={<ShoppingCart />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/login" element={<Login />} key={Date.now()} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </div>
                    <Footer />
                </Router>
            </div>
        </ThemeProvider>  
    );
};

export default App;
