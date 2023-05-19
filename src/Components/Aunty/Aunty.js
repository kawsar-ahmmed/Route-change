import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext);
    const handelerIncress = () => {
        const newHouse = house + 1;
        setHouse (newHouse);
    }
    return (
        <div>
            <h4>Aunty is here</h4>
            <h3>House:{house} </h3>
            {house >4 && <button onClick={() => handelerIncress(house)}> My House work</button>}
        </div>
    );
};

export default Aunty;