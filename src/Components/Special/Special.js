import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h4>My love</h4>
            <p>{house}</p>
            <button onClick={() => setHouse( house + 1)}>Buy House</button>
        </div>
    );
};


export default Special;