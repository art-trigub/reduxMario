import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { createTheme, ThemeProvider, useTheme} from '@mui/material/styles';
import React, { Component, useState, useEffect, useRef  } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Routes from "./Routes/Routes";

function App({mode}) {
  const theme = useTheme();
  return (
    <div className="App" id='app_id' style={{backgroundColor: `${theme.palette.primary[theme.palette.mode]}`}}>
      <Header />
      <div className='content_container'>
          <Routes mode={mode}/>
      </div>  
        <Footer />

    </div>
  );
}


export default App;
