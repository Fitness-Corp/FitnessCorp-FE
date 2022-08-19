import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginPopUp from "../LoginPopUp";
import NavBar from "./NavBar";



const SplashLanding = ({ loginPop }) => {
    const navigate = useNavigate();


    return (
        <div>
            <NavBar />
            <h2>GET<br />FIT<br />WITH<br />US</h2>
            <button onClick={() => navigate("/dashboard")}>Button</button>
            {loginPop ? <><LoginPopUp /></> : ''}
        </div>
    );
};

const mapState = state => {
    return {
        loginPop: state.loginPop
    };
};


export default connect(mapState)(SplashLanding);