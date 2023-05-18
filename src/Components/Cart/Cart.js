import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
const Cart = ({ cart, handleRemoveFromCart }) => {
    let command;
    if (cart.length === 0) {
        command = 'Atlist add a item'
    }
    else if (cart.length === 1) {
        command = 'Thanks for adding'
    }
    else {
        command = ''
    }
    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>
            {
                cart.map(tShirt =>
                    <div className="items-details">
                        <p>Name: {tShirt.name}
                            <button onClick={() =>
                                handleRemoveFromCart(tShirt)}> <FontAwesomeIcon icon={faSquareXmark}
                                /> </button>
                        </p>
                    </div>
                )
            }
            {command}
            <br />
            {cart.length !== 3 ? 'Keep adding' : 'Removed all'}
        </div>
    );
};

export default Cart;