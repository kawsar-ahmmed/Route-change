import './TShirt.css'
import React from 'react';

const TShirt = ({tshirts, handleAddToCart}) => {
    const {name, picture, price} = tshirts;
    return (
        <div>
            <div className="tshirt-cart">
                <img src={picture} alt="" />
                <h2>{name}</h2>
                <p>Price $:{price}</p>
                <button onClick={()=> handleAddToCart(tshirts)}>Add to cart</button>
                
            </div>
        </div>
    
    );
};

export default TShirt;

//