import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import CartProvider from './context/CartContext';
import AuthProvider from './context/AuthContext';
import ProductProvider from './context/ProductContext';

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <ProductProvider>
        <AuthProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </AuthProvider>
    </ProductProvider>
);
