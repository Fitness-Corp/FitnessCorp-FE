import React from "react";
import { connect } from "react-redux";
import LoginPopUp from "../LoginPopUp";
import '../../App.css';
import workout from '../../assets/workout.mp4';

const SplashLanding = ({ loginPop, loggedIn, dispatch }) => {
    return (
        <div className="splashLanding">
            <video src={workout} autoPlay loop muted id="video" />
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