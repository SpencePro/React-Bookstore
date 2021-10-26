import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <div className="nav-logo">
                <h2>Bookstore</h2>
            </div>
            <ul className="navbar">
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/cart">CART</Link>
                </li>
            </ul>
        </nav>
    )
}