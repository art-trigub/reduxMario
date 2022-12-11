import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

import React, { Component, useState, useEffect, useRef  } from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Routes from "./Routes/Routes";

function App() {
  const [widthScreen, setWidthScreen] = React.useState()


  useEffect(() => {
    setWidthScreen(document.outerWidth)
}, []);



  return (
    <div className="App" id='app_id'>
55555
      <Header />
      <div className='content_container'>
          <Routes />

      </div>  
        <Footer />

    </div>
  );
}


export default App;
