import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ ornament }) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h4>My love</h4>
            <p>{ring}</p>
        </div>
    );
};


export default Special;