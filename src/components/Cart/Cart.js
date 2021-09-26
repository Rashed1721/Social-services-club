import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const element of cart) {
        total = total + element.Salary;
    }
    return (
        <div className='cart'>
            <h4>Employe Added:{cart.length}</h4>
            <h5>Total cost:{total}</h5>

        </div>
    );
};

export default Cart;