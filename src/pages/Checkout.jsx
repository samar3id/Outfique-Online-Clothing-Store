import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cart, getTotal } = useContext(CartContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        paymentMethod: 'creditCard'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        const order = { cart, ...formData, date: new Date().toISOString() };

        let orders = JSON.parse(localStorage.getItem('orders')) || [];

        orders.push(order);

        localStorage.setItem('orders', JSON.stringify(orders));

        alert('Thank you for your order!');
        navigate('/');
    };


    return (
        <div className="container py-5">
            <h1 className="text-center mb-5">Checkout</h1>

            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm p-4">
                        <h4 className="mb-3">Billing & Shipping Details</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input type="text" name="fullName" className="form-control" value={formData.fullName} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <input type="text" name="address" className="form-control" value={formData.address} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">City</label>
                                <input type="text" name="city" className="form-control" value={formData.city} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Postal Code</label>
                                <input type="text" name="postalCode" className="form-control" value={formData.postalCode} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Payment Method</label>
                                <select name="paymentMethod" className="form-select" value={formData.paymentMethod} onChange={handleChange}>
                                    <option value="creditCard">Credit Card</option>
                                    <option value="paypal">PayPal</option>
                                    <option value="cashOnDelivery">Cash on Delivery</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-success w-100">Place Order</button>
                        </form>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm p-4">
                        <h4 className="mb-3">Order Summary</h4>
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <ul className="list-group mb-3">
                                {cart.map(item => (
                                    <li key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            {item.title} <br />
                                            <small className="text-muted">
                                                Color: {item.selectedColor || 'N/A'}, Size: {item.selectedSize || 'N/A'}
                                            </small>
                                        </div>
                                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                                    </li>
                                ))}
                                <li className="list-group-item d-flex justify-content-between align-items-center fw-bold">
                                    Total
                                    <span>${getTotal()}</span>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
