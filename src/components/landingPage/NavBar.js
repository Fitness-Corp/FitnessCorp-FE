import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleLogin } from "../../actions";
import { logout } from "../../actions";
import '../../App.css';
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import Checkout from "./Checkout";

const NavBar = ({ cart, loggedIn, dispatch }) => {

    const toggleLoginButton = () => {

        dispatch(toggleLogin());
    };
    const logOut = () => {
        dispatch(logout());
    };

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

                    {loggedIn ? <button onClick={logOut}>LOG OUT</button> : <button onClick={toggleLoginButton}>LOG IN</button>}
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

