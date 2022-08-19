import React from "react";
import { connect } from "react-redux";
import LoginPopUp from "../LoginPopUp";
import NavBar from "./NavBar";



const SplashLanding = ({ loginPop }) => {
    return (
        <div className="splashLanding">
            <div className="homePage">
                <NavBar />
                <h1>GET<br />FIT<br />WITH<br />US</h1>
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