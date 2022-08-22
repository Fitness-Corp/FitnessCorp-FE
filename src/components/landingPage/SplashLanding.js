import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginPopUp from "../LoginPopUp";



const SplashLanding = ({ loginPop }) => {
    const navigate = useNavigate();
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return (
        <div>
            <img src="" alt="Small Logo" />
            <h2>GET<br />FIT<br />WITH<br />US</h2>
            <button onClick={() => openInNewTab('https://open.spotify.com/playlist/7DaNB3xvJ4F96C66mQgmpS?si=8f7c3a75926946bd')}>
        Spotify
      </button>
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