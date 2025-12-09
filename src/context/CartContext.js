import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, selectedColor, selectedSize) => {
        const existingItem = cart.find((item) =>
            item.id === product.id && item.selectedColor === selectedColor && item.selectedSize === selectedSize
        );
        if (existingItem) {
            setCart(cart.map((item) =>
                item.id === product.id && item.selectedColor === selectedColor && item.selectedSize === selectedSize
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...product, selectedColor, selectedSize, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId, selectedColor, selectedSize) => {
        setCart(cart.filter((item) =>
            !(item.id === productId && item.selectedColor === selectedColor && item.selectedSize === selectedSize)
        ));
    };

    const updateQuantity = (productId, selectedColor, selectedSize, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId, selectedColor, selectedSize);
        } else {
            setCart(cart.map((item) =>
                item.id === productId && item.selectedColor === selectedColor && item.selectedSize === selectedSize
                    ? { ...item, quantity: quantity }
                    : item
            ));
        }
    };

    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getTotal }}>
            { children }
        </CartContext.Provider>
    );
};

export default CartProvider;