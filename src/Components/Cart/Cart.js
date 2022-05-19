import React from 'react';
import { Button } from 'react-bootstrap';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((sum, course) => sum + course.price, 0);
    const tax = total / 10;
    return (
        <div className='cart-box'>
            <h4>Total Order Item: {cart.length}</h4>
            <p>Product Price: ${total}</p>
            <p>Tax: ${tax}</p>
            <p>Total: ${total + tax}</p>
            <Button variant='success'>Place Order</Button>
        </div>
    );
};

export default Cart;