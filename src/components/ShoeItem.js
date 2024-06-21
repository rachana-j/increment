import React from 'react';

const ShoeItem = ({ shoe, addToCart }) => {
    return (
        <div className="shoe-item">
            <img src={shoe.image} alt={shoe.name} />
            <h3>{shoe.name}</h3>
            <p>{shoe.price}</p>
            <button onClick={() => addToCart(shoe)}>Add to Cart</button>
        </div>
    );
};

export default ShoeItem;
