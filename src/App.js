
//import { NavBar } from './component';
import React from 'react';

import {NavBar, Counter} from './component';
import { HeroPage,ApplicationPage,PillarPage,QAPage,ContactPage,Schedule } from './container';
import './App.css';
// import { callApi } from './api';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (

  <div>
    <NavBar/>
    
    <HeroPage/>
    <Counter/>
    <PillarPage/>
    <ApplicationPage/>
    <Schedule/>
    <QAPage/>
    <ContactPage/>


    {/* <ApplicationPage/>
    <PillarPage/>
    <QAPage/>
    <ContactPage/> */}

  </div>
);

export default App;