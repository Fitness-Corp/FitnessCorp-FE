import React, { useState } from "react";
import { connect } from "react-redux";
import LoginPopUp from "../LoginPopUp";



const SplashLanding = ({ loginPop }) => {
    // const [ loginPop, setloginPop ] = useState(false)


    return (
        <div>
            <img src="" alt="Small Logo"/>
            <h2>GET<br/>FIT<br/>WITH<br/>US</h2>
            <button>Button</button>
            {loginPop ? <><LoginPopUp/></> : ''}
        </div>
    )
}

const mapState = state => {
    return {
        loginPop: state.loginPop
    }
}


export default connect(mapState)(SplashLanding)