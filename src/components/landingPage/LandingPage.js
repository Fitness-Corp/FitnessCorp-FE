import React, {useEffect} from 'react';
import NavBar from './NavBar';
import SplashLanding from './SplashLanding';
import AboutUs from './AboutUs';
import ClassSection from './ClassSection';
import IconSection from './IconSection';
import MembershipSection from './MembershipSection';
import Reviews from './Reviews';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { validate } from '../../actions';


const LandingPage = ({loggedIn, fetching, dispatch}) => {

      const push = useNavigate()

      useEffect(() => {
        if(!loggedIn && localStorage.getItem('login')){
            dispatch(validate(localStorage.getItem('login')))
        }
    }, [])
      useEffect(() => {
        if(loggedIn){
          push('/dashboard')
        }
      }, [loggedIn])



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


const mapState = (state) => {
    return {
      fetching: state.fetching,
      loggedIn: state.loggedIn,
  }
}


export default connect(mapState)(LandingPage)
