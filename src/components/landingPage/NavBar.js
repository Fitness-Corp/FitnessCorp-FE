import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleLogin } from "../../actions";
import { logout } from "../../actions";
import axios from "axios";



const NavBar = ({ loggedIn, dispatch }) => {

    const toggleLoginButton = () => {

        dispatch(toggleLogin());
    };
    const logOut = () => {
        dispatch(logout());
    };

    return (
        <div className="splashLanding">
            <h3>Fitness Corp</h3>
            <nav>
                <a href="#about">ABOUT</a>
                <a href="#classes">CLASSES</a>
                <a href="#membership">MEMBERSHIP</a>
                <a href="#contact">CONTACT</a>
                {loggedIn ? <button onClick={logOut}>Log Out</button> : <button onClick={toggleLoginButton}>Login</button>}
            </nav>
        </div>
    );
};


const mapState = (state) => {
    return {
        loggedIn: state.loggedIn
    };
};


export default connect(mapState)(NavBar);

