import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
const Cart = ({ cart, handleRemoveFromCart }) => {

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
        </div>
    );
};

export default Cart;