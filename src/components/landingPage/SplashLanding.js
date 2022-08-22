import React from "react";
import { connect } from "react-redux";
import LoginPopUp from "../LoginPopUp";
import '../../App.css';
import workout from '../../assets/workout.mp4';


const SplashLanding = ({ loginPop }) => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    return (
        <div className="splashLanding">
            <video src={workout} autoPlay loop muted id="video" />
            <div className="homePage">
                <h1>GET FIT<br />WITH US</h1>
                {loginPop ? <><LoginPopUp /></> : ''}
                <button onClick={() => openInNewTab('https://open.spotify.com/playlist/7DaNB3xvJ4F96C66mQgmpS?si=8f7c3a75926946bd')}>Spotify</button>
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