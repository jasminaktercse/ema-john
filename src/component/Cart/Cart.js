import React from 'react';
//sorasori distructure kora hoiche {cart} 
const Cart = ({cart}) => {
    return (
        <div>
             <h3>Order Summary</h3>   
              <p>Selected Items {cart.length}</p> 
        </div>
    );
};

export default Cart;