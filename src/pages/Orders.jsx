import React, { useState, useEffect } from 'react';

const Orders = () => {

    const [pendingOrders, setPendingOrders] = useState([]);
    const [completedOrders, setCompletedOrders] = useState([]);

    useEffect(() => {
        const savedPending = JSON.parse(localStorage.getItem('orders')) || [];
        const savedCompleted = JSON.parse(localStorage.getItem('completedOrders')) || [];
        setPendingOrders(savedPending);
        setCompletedOrders(savedCompleted);
    }, []);

    const completeOrder = (index) => {
        const orderToMove = pendingOrders[index];
        const newPending = pendingOrders.filter((_, i) => i !== index);
        const newCompleted = [...completedOrders, orderToMove];

        setPendingOrders(newPending);
        setCompletedOrders(newCompleted);

        localStorage.setItem('orders', JSON.stringify(newPending));
        localStorage.setItem('completedOrders', JSON.stringify(newCompleted));
    };

    return (
        <div className="container py-5">

            <h1 className="text-center mb-4">Orders</h1>

            <h2>Pending Orders</h2>
            {pendingOrders.length === 0 ? (
                <p>No pending orders.</p>
            ) : (
                pendingOrders.map((order, index) => (
                    <div key={index} className="card mb-3 p-3 shadow">
                        <h5>Order #{index + 1} - {new Date(order.date).toLocaleString()}</h5>
                        <p><strong>Name:</strong> {order.fullName}</p>
                        <p><strong>Email:</strong> {order.email}</p>
                        <p><strong>Phone:</strong> {order.phone}</p>
                        <p><strong>Address:</strong> {order.address}, {order.city}, {order.postalCode}</p>
                        <p><strong>Payment:</strong> {order.paymentMethod}</p>

                        <h6>Items:</h6>
                        <ul>
                            {order.cart.map(item => (
                                <li key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}>
                                    {item.title} - Color: {item.selectedColor || 'N/A'}, 
                                    Size: {item.selectedSize || 'N/A'}, 
                                    Quantity: {item.quantity}, 
                                    Price: ${item.price}
                                </li>
                            ))}
                        </ul>

                        <button 
                            className="btn btn-success mt-2"
                            onClick={() => completeOrder(index)}
                        >
                            Mark as Completed
                        </button>
                    </div>
                ))
            )}

            <hr className="my-5" />

            <h2>Completed Orders</h2>
            {completedOrders.length === 0 ? (
                <p>No completed orders yet.</p>
            ) : (
                completedOrders.map((order, index) => (
                    <div key={index} className="card mb-3 p-3 shadow bg-light">
                        <h5>Completed Order #{index + 1}</h5>
                        <p><strong>Name:</strong> {order.fullName}</p>
                        <p><strong>Email:</strong> {order.email}</p>
                        <p><strong>Phone:</strong> {order.phone}</p>
                        <p><strong>Address:</strong> {order.address}, {order.city}, {order.postalCode}</p>
                        <p><strong>Payment:</strong> {order.paymentMethod}</p>

                        <h6>Items:</h6>
                        <ul>
                            {order.cart.map(item => (
                                <li key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}>
                                    {item.title} - Color: {item.selectedColor || 'N/A'}, 
                                    Size: {item.selectedSize || 'N/A'}, 
                                    Quantity: {item.quantity}, 
                                    Price: ${item.price}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            )}

        </div>
    );
};

export default Orders;
