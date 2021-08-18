import React from 'react';
import  logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div>
        <div className="heading">
            <div className="logo-area">
            <img src={logo} alt="logo"  />
            </div>
            <nav>

                <a href="/shop"> Shop </a>
                <a href="/review">Oder Review</a>
                <a href="/inventory" > Manage</a>
                <a href="/about" > About</a>
                
            </nav>
        </div>
            
        </div>
    );
};

export default Header;

