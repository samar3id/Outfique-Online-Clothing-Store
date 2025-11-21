import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
    const authContext = useContext(AuthContext);
    const { user, logout } = authContext || {}; // تحقق إضافي لو الـ context 

    return (
<header className="fixed-top shadow small-header custom-header">

           <nav className="navbar navbar-expand-lg navbar-light container small-navbar">
                <Link className="navbar-brand" to="/" style={{ fontFamily: 'Amiri', textTransform: 'uppercase' }}>Outfique</Link> {/* أضفت style هنا عشان الخط رقعة وكابتل */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {user ? (
                                <button onClick={logout} className="btn btn-link nav-link">Logout</button>
                            ) : (
                                <Link className="nav-link" to="/login">Login</Link>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;