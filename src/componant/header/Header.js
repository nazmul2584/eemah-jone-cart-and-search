import React from 'react';
import logo from '../../images/Logo.svg'
import './eader.css'

const Header = () => {
    return (
        <nav className='heder'>
        <img src= {logo} alt="" />
        <div>
            <a href=""> shope</a>
            <a href=""> home</a>
            <a href="">about</a>
            <a href="">inventory</a>
        </div>
        </nav>
    );
};

export default Header;