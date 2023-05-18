import React from 'react';
import Special from '../Special/Special';

const Myself = ({house, ornament}) => {
    return (
        <div>
            <h4>My slef Alen shopon</h4>
            <p>House : {house}</p>
            <Special ornament={ornament}></Special>
        </div>
    );
};

export default Myself;