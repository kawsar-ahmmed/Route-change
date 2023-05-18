import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sisters from '../Sister/Sisters';
import './Father.css'

const Father = ({house, ornament}) => {
    return (
        <div className='father' >
            <h4>Father</h4>
            <div className="my-family" style={{ display: 'flex' }}>
                <Myself house={house} ornament={ornament}></Myself>
                <Brother house={house}></Brother>
                <Sisters house={house}></Sisters>
            </div>
        </div>
    );
};

export default Father;