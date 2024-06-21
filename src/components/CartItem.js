import React from 'react';
import './CartItem.css'; // Make sure to import the CSS file

const CartItem = ({ item, incrementQuantity, decrementQuantity }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>{item.price}</p>
            </div>
            <div className="quantity-controls">
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item)}>+</button>
            </div>
        </div>
    );
};

export default CartItem;
