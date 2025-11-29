import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext) || {};
  const { cart } = useContext(CartContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={`fixed-top shadow ${isDarkMode ? 'dark-mode' : 'custom-header'}`}>
      <nav className="navbar navbar-expand-lg container py-2">

        <NavLink className="navbar-brand fw-bold fs-4" to="/" style={{ fontFamily: 'Amiri', textTransform: 'uppercase' }}>
          Outfique
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {['/', '/products', '/about', '/contact'].map((path, idx) => {
              const names = ['Home', 'Products', 'About', 'Contact'];
              return (
                <li className="nav-item" key={idx}>
                  <NavLink 
                    className={({ isActive }) => "nav-link px-3" + (isActive ? " active-link" : "")} 
                    to={path}>
                    {names[idx]}
                  </NavLink>
                </li>
              );
            })}
            {user && (
              <li className="nav-item">
                <NavLink className={({ isActive }) => "nav-link px-3" + (isActive ? " active-link" : "")} to="/admin">Admin</NavLink>
              </li>
            )}
          </ul>

          <ul className="navbar-nav ms-auto d-flex align-items-center">
            {user ? (
              <li className="nav-item me-2">
                <button onClick={logout} className="btn btn-outline-light btn-sm">Logout</button>
              </li>
            ) : (
              <>
                <li className="nav-item me-2">
                  <NavLink className="btn btn-outline-light btn-sm" to="/login">Login</NavLink>
                </li>
                <li className="nav-item me-2">
                  <NavLink className="btn btn-outline-light btn-sm" to="/signup">Sign Up</NavLink>
                </li>
              </>
            )}

            <li className="nav-item me-2">
              <button onClick={toggleTheme} className="btn btn-light btn-sm">
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </li>

            <li className="nav-item position-relative">
              <NavLink className="nav-link position-relative" to="/cart">
                🛒
                {totalItems > 0 && (
                  <span className="cart-badge">{totalItems}</span>
                )}
              </NavLink>
            </li>
          </ul>

        </div>
      </nav>

    </header>
  );
};

export default Header;
