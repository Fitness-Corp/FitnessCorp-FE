import React from "react";
import { connect } from "react-redux";
import LoginPopUp from "../LoginPopUp";
import '../../App.css';

const SplashLanding = ({ loginPop, loggedIn, dispatch }) => {
    return (
        <div className="splashLanding">
            <div className="homePage">
                <h1>GET FIT<br />WITH US</h1>
                {loginPop ? <><LoginPopUp /></> : ''}
            </div>
        </div>
    );
};

const mapState = state => {
    return {
        loginPop: state.loginPop
    };
};


export default connect(mapState)(SplashLanding);