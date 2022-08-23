import React, { useState } from "react";
import LoginPopUp from "../LoginPopUp";
import '../../App.css';
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import Checkout from "./Checkout";
import Popup from "reactjs-popup";
import { connect } from "react-redux";

const NavBar = ({ cart }) => {

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
                        <AiOutlineShoppingCart onClick={handleOpen} />({cart.quantity})
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
                            <div className="testing">
                                <button className="closed" onClick={close}>
                                    &times;
                                </button>
                                <div className="trigger">
                                    <LoginPopUp />
                                </div>
                            </div>
                        )}
                    </Popup>
                </nav>
            </div>
        </div>
    );
};


const mapState = (state) => {
    return {
        loggedIn: state.loggedIn,
        cart: state.cart
    };
};


export default connect(mapState)(NavBar);

