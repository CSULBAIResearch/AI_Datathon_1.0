
//import { NavBar } from './component';
import React from 'react';

import {NavBar, Counter} from './component';
import { HeroPage,PillarPage,QAPage,ContactPage,Schedule,JudgePage, MemberPage } from './container';
import './App.css';
// import { callApi } from './api';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (

  <div>
    <NavBar/>
    
    <HeroPage/>
    <Counter/>
    <PillarPage/>
    {/* <ApplicationPage/> */}
    <MemberPage/>
    <JudgePage/>
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