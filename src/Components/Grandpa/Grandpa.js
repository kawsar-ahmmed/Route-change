import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

const Grandpa = () => {
    // Context api text
    const RingContext = createContext('Dimon Ding')
    //
    const [house, setHouse] = useState(0);
    const ornament = 'Dimon Ring'
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider>
            <div className='grandpa' >
                <h3>Grandpa</h3>
                <p>House: {house}<button onClick={() => handleBuyAHouse()}>Buy a house</button></p>
                <div className="family">
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>

    );
};

export default Grandpa;