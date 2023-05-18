import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sisters from '../Sister/Sisters';
import './Father.css'

const Father = () => {
    return (
        <div className='father'>
            <h4>Father</h4>
            <Myself></Myself>
            <Brother></Brother>
            <Sisters></Sisters>
        </div>
    );
};

export default Father;