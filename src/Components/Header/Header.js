import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h1>This is tshirt mania</h1>
            <nav className="menu-main">
                <NavLink to='/home' className={({ isActive, isPending }) =>
                    isPending ? "home" : isActive ? "active" : ""
                }>Home</NavLink>
                <NavLink to='orderreview' className={({ isActive, isPending }) =>
                    isPending ? "orderreview" : isActive ? "active" : ""
                }>Order Review</NavLink>
                <NavLink to='grandpa' className={({ isActive, isPending }) =>
                    isPending ? "grandpa" : isActive ? "active" : ""
                }>Grandpa</NavLink>
                
            </nav>

        </div>
    );
};

export default Header;