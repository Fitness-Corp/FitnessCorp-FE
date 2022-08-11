import logo from './logo.svg';
import './App.css';
import { Route, Switch, useHistory } from "react-router-dom";
import React, { useEffect } from 'react';
import logger from "redux-logger";
// import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import NavBar from './components/landingPage/NavBar';
import SplashLanding from './components/landingPage/SplashLanding';
import Reviews from './components/landingPage/Reviews';
import Footer from './components/landingPage/Footer';
import MembershipSection from './components/landingPage/MembershipSection';
import IconSection from './components/landingPage/IconSection';
import ClassSection from './components/landingPage/ClassSection';
import AboutUs from './components/landingPage/AboutUs';


const store = configureStore({
  reducer: reducer
});



// const store = configureStore(reducer, applyMiddleware(thunk, logger))

function App({ dispatch }) {


  return (
    <Provider store={store}>

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
    </Provider>

  );
}

export default App;
