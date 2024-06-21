import React from 'react';
import './ShoeList.css';

const ShoeList = ({ shoes, addToCart }) => {
    return (
        <div>
            <h2>Shoe List</h2>
            <ul className="shoe-list">
                {shoes.map(shoe => (
                    <li key={shoe.id} className="shoe-item">
                        <img src={shoe.image} alt={shoe.name} className="shoe-image" />
                        <div className="shoe-details">
                            <span className="shoe-name">{shoe.name}</span>
                            <span className="shoe-price">{shoe.price}</span>
                            <button className="add-to-cart-button" onClick={() => addToCart(shoe)}>Add to Cart</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoeList;
