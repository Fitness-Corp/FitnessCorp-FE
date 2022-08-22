import React, { useState } from "react";
import LoginPopUp from "../LoginPopUp";
import '../../App.css';
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import Checkout from "./Checkout";
import Popup from "reactjs-popup";

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleOpen = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navBar">
            <div className="test">
                <h2>Fitness Corp</h2>
                <nav>
                    <a href="#about">ABOUT</a>
                    <a href="#classes">CLASSES</a>
                    <a href="#membership">MEMBERSHIP</a>
                    <a href="#contact">CONTACT</a>

                    <span className="menu-bars">
                        <AiOutlineShoppingCart onClick={handleOpen} />
                    </span>
                    <nav className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={handleOpen}>
                            <li className='navbar-toggle'>
                                <AiOutlineClose />
                            </li>
                            <Checkout />
                        </ul>
                    </nav>

                    <Popup
                        trigger={<button>LOG IN</button>}
                        modal
                        nested
                    >
                        {close => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <LoginPopUp />
                            </div>
                        )}
                    </Popup>
                </nav>
            </div>
        </div>
    );
};



export default NavBar;

