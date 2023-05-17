import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h1>This is tshirt mania</h1>
            <nav className="menu-main">
                <NavLink to='/home' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>Home</NavLink>
                <NavLink to='orderreview' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>Order Review</NavLink>
                
            </nav>

        </div>
    );
};

export default Header;