import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    
    let total = 0;
    for(const poet of cart){
        total = total + poet.fans;
    }
    return (
        <div className="cart-container">
            <h2>Poets Added: <span className="cart">{cart.length}</span></h2>
            <h3>Total Fans: <span className="cart">{total}</span></h3>
            <ul>
                 {
                     cart.map(poet => <li key={poet.name}>{poet.name}</li>)
                 }
             </ul>
        </div>
    );
};

export default Cart;