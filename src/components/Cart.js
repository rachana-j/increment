
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart, addToCart }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                        incrementQuantity={addToCart}
                        decrementQuantity={removeFromCart}
                    />
                ))
            )}
        </div>
    );
};

export default Cart;
