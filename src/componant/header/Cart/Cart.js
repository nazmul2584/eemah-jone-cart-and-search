import React from 'react';

const Cart = (props) => {
    const {card} = props;
    return (
        <div>
            <h1 >order summary </h1>
            <p>silected iteam : {card.length}  </p>
        </div>
    );
};

export default Cart;