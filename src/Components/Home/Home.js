import React from 'react';
import Cart from '../Cart/Cart';
import './Home.css'
import useTshirts from '../../hooks/useTshirts';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const [tshirts, setTshirts] = useTshirts();
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirts => <TShirt
                    key = {tshirts._id}
                    tshirts = {tshirts}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;