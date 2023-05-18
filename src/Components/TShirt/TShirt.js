import React from 'react';
import './TShirt.css'

const TShirt = (props) => {
    const {name, picture, price} = props.tshirts;
    return (
        <div>
            <div className="tshirt-cart">
                <img src={picture} alt="" />
                <h2>{name}</h2>
                <p>Price $:{price}</p>
                <button>Add to cart</button>
            </div>
        </div>
    );
};

export default TShirt;