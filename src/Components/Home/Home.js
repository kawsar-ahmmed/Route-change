import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css'
import useTshirts from '../../hooks/useTshirts';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const [tshirts, setTshirts] = useTshirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tshirts => tshirts._id === selectedItem._id );
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert(`Items already added`)
        }
    }
    // card remove
    const handleRemoveFromCart = (selectedItems => {
        const restItem = cart.filter(tshirts => tshirts._id !== selectedItems._id);
        setCart(restItem);
    })
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirts => <TShirt
                    key = {tshirts._id}
                    tshirts = {tshirts}
                    handleAddToCart ={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                cart = {cart}
                key = {cart._id}
                handleRemoveFromCart = {handleRemoveFromCart}>
                </Cart>
            </div>
        </div>
    );
};

export default Home;