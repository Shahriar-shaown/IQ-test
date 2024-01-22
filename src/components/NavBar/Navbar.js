import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <h1>IQ TEST</h1>
            </div>
            <div>
                <Link to='/'>Topics</Link>
                <Link to='statistic'>Statistics</Link>
                <Link to='blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Navbar;