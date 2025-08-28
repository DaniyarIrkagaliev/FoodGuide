import React from 'react';
import "./nav.scss"
// import img from '../../data/logo192.png'

const NavBar = () => {
    return (
        <div className=" nav-body">
            <div className="container nav-elements">
                <div className="right">
                    <a href="/"> FoodGuide</a>
                </div>
                <a href="/about">About</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default NavBar;