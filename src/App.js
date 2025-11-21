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
import Login from './pages/Login'; // إضافة هذا

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} key={Date.now()} /> {/* أضف key هنا لإجبار إعادة تحميل */}
            </Routes>
            <Footer />
        </Router>
        
    );
};

export default App;