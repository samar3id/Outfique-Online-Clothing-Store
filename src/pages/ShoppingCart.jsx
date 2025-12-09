
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
const ShoppingCart = () => {
    const { cart, removeFromCart, updateQuantity, getTotal } = useContext(CartContext);

    return (
        <div className="container py-5 shcart">
            <h1 className="text-center mb-4">Your Shopping Cart</h1>
            {cart.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
            ) : (
                <>
                    <div className="row">
                        <div className="col-12">
                            <ul className="list-group">
                                {cart.map((item) => (
                                    <li key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="list-group-item d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <img src={item.image} alt={item.title} className="img-fluid me-3" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                                            <div>
                                                <h5>{item.title}</h5>
                                                <p className="mb-1">${item.price.toFixed(2)} each</p>
                                                <small>
                                                    Color: {item.selectedColor || 'N/A'}, Size: {item.selectedSize || 'N/A'}
                                                </small>
                                                <br />
                                                <div className="mt-2">
                                                    <label className="me-2">Quantity:</label>
                                                    <input
                                                        type="number"
                                                        min="1"
                                                        value={item.quantity}
                                                        onChange={(e) => updateQuantity(item.id, item.selectedColor, item.selectedSize, parseInt(e.target.value))}
                                                        style={{ width: '60px' }}
                                                        className="form-control d-inline-block"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-1"><strong>Total: ${(item.price * item.quantity).toFixed(2)}</strong></p>
                                            <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)}>
                                                Remove
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 text-end">
                            <h3>Grand Total: ${getTotal()}</h3>
                            <Link to="/checkout" className="btn btn-success btn-lg me-2">
                                Proceed to Checkout
                            </Link>
                            <Link to={'/'} className="btn btn-secondary btn-lg">Continue Shopping</Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ShoppingCart;
