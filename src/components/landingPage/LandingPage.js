import React from 'react';
import NavBar from './NavBar';
import SplashLanding from './SplashLanding';
import AboutUs from './AboutUs';
import ClassSection from './ClassSection';
import IconSection from './IconSection';
import MembershipSection from './MembershipSection';
import Reviews from './Reviews';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <div>
      <div className="App">
        <NavBar />
        <SplashLanding />
        <AboutUs />
        <ClassSection />
        <IconSection />
        <MembershipSection />
        <Reviews />
        <Footer />
      </div>
    </div>
  );
}
