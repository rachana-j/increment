import React from 'react';

const ShoeItem = ({ shoe, addToCart }) => {
    return (
        <div>
            <h3>{shoe.name}</h3>
            <p>{shoe.price}</p>
            <button onClick={() => addToCart(shoe)}>Add to Cart</button>
        </div>
    );
};

export default ShoeItem;
