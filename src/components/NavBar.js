import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/images/logo.png" alt="Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#categories">Categories</a></li>
                <li><a href="#about">About Us</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
