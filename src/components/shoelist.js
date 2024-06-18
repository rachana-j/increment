import React from 'react';
import ShoeItem from './ShoeItem';

const ShoeList = ({ shoes, addToCart }) => {
    return (
        <div>
            <h2>Shoe List</h2>
            <div>
                {shoes.map((shoe) => (
                    <ShoeItem key={shoe.id} shoe={shoe} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default ShoeList;
