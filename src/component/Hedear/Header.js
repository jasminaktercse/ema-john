import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
             
            <nav>
                <img src={logo}  />
                <div>  
                    <a href="../Shop">Shop</a>
                    <a href="">Order's</a>
                    <a href="">Inventory</a>
                    <a href="">About</a> 
                </div>
            </nav>

        </div>
    );
};

export default Header;