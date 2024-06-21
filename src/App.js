

import React, { useState } from 'react';
import './App.css';
import ShoeList from './components/ShoeList';
import Cart from './components/Cart';
import NavBar from './components/NavBar';

const App = () => {
    const [shoes] = useState([
        { id: 1, name: 'Casual Shoes', price: '$50', image: '/images/s1.jpeg' },
        { id: 2, name: 'Sneakers', price: '$60', image: '/images/s2.png' },
        { id: 3, name: 'Sports Shoes', price: '$90', image: '/images/s3.png' },
        { id: 4, name: 'Sneakers', price: '$60', image: '/images/s4.jpeg' },
        { id: 5, name: 'Running Shoes', price: '$70', image: '/images/s5.png' },
        { id: 6, name: 'Sneakers', price: '$50', image: '/images/s6.jpeg' },
        { id: 7, name: 'Boots', price: '$90', image: '/images/s7.png' },
    ]);

    const [cart, setCart] = useState([]);

    const addToCart = (shoe) => {
        const existingShoe = cart.find(item => item.id === shoe.id);
        if (existingShoe) {
            setCart(cart.map(item =>
                item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...shoe, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        const existingShoe = cart.find(item => item.id === id);
        if (existingShoe.quantity === 1) {
            setCart(cart.filter(item => item.id !== id));
        } else {
            setCart(cart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            ));
        }
    };

    return (
        <div>
            <NavBar />
            <h1>Online Shoe Store</h1>
            <div className="container">
                <div className="shoe-list">
                    <ShoeList shoes={shoes} addToCart={addToCart} />
                </div>
                <div className="cart">
                    <Cart cartItems={cart} removeFromCart={removeFromCart} addToCart={addToCart} />
                </div>
            </div>
        </div>
    );
};

export default App;
