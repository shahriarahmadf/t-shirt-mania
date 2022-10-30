import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveItem}) => {
    return (
        <div>
            <h3 className={cart.length === 2 ? `orange` : `purple`}>
                Order Summary
                </h3>
            
            <h5 className={`bold ${cart.length === 2 ? 'yellow' : 'blue'}`}>
                Order Quantity: {cart.length}
            </h5>
            {
                cart.map(tshirt => 
                <p key = {tshirt._id}>
                    {tshirt.name} 
                        <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                cart.length > 0 ? <p>Thanks for buying!</p> : <p>Please Buy!</p>
            }
        </div>
    );
};

export default Cart;
