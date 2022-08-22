import React from "react";
import { connect } from "react-redux";
import { toggleLogin } from "../../actions";
import { logout } from "../../actions";
import '../../App.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const NavBar = ({ loggedIn, dispatch }) => {

    const toggleLoginButton = () => {

        dispatch(toggleLogin());
    };
    const logOut = () => {
        dispatch(logout());
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
                    <span className="shopping-cart"><AiOutlineShoppingCart /></span>
                    {loggedIn ? <button onClick={logOut}>LOG OUT</button> : <button onClick={toggleLoginButton}>LOG IN</button>}
                </nav>
            </div>
        </div>
    );
};


const mapState = (state) => {
    return {
        loggedIn: state.loggedIn
    };
};


export default connect(mapState)(NavBar);

