import './App.css';
import { Route, Routes } from "react-router-dom";
import React from 'react';
// import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from '../src/reducers/index';
import { configureStore } from '@reduxjs/toolkit';

import Dashboard from './pages/Dashboard';
import LandingPage from './components/landingPage/LandingPage';


const store = configureStore({
  reducer: reducer
});



// const store = configureStore(reducer, applyMiddleware(thunk, logger))

function App({ dispatch }) {


  return (
    <Provider store={store}>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>

    </Provider>

  );
}

export default App;
