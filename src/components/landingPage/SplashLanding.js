import React from "react";
import '../../App.css';
import workout from '../../assets/workout.mp4';
import { FaSpotify } from 'react-icons/fa';


const SplashLanding = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <div className="splashLanding">
            <video src={workout} autoPlay loop muted id="video" />
            <div className="homePage">
                <h1>GET FIT<br />WITH US</h1>

                <button onClick={() => openInNewTab('https://open.spotify.com/playlist/7DaNB3xvJ4F96C66mQgmpS?si=8f7c3a75926946bd')}><span><FaSpotify /></span>CHECK OUR PLAYLIST</button>
            </div>

        </div>
    );
};



export default SplashLanding;