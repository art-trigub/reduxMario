import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import apiProjects from './services/apiProjects';

import { createTheme, ThemeProvider, useTheme} from '@mui/material/styles';
import React, { Component, useState, useEffect, useRef  } from "react";
import {Link} from "react-router-dom";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Routes from "./Routes/Routes";
import PlusButton from "./components/custom/BasicComponents/PlusButton";





function App({mode}) {
  const theme = useTheme();

  function onPlusButton() {
    alert("eee")
	}

  useEffect(()=> {
    apiProjects.get().then(resp => setProjectsList(resp.data))
  }, [])



  return (
    <div className="App" id='app_id' style={{backgroundColor: `${theme.palette.primary[theme.palette.mode]}`}}>
      <Header />
      <div className='content_container'>
          <div className="add_new_project__container">
            <Link to="/addproject"><PlusButton onClick={onPlusButton}/></Link>
          </div>
          <Routes mode={mode}/>
      </div>  
      <Footer />

    </div>
  );
}


export default App;
