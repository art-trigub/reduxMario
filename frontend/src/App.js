import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import apiProjects from './services/apiProjects';
import { getProjects, delProject } from './store/actions/projects'
// import Loader from '../CommonsComponents/Loader/Loader';

import { createTheme, ThemeProvider, useTheme} from '@mui/material/styles';
import React, { Component, useState, useEffect, useRef  } from "react";
import {Link, useRouteMatch} from "react-router-dom";
import { connect } from 'react-redux';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Routes from "./Routes/Routes";
import PlusButton from "./components/custom/BasicComponents/PlusButton";



function App({mode, projectsData, getProjects}) {
  const theme = useTheme();
  console.log(getProjects)

  function onPlusButton() {
    alert("eee")
	}
  useEffect(()=> {
    let data1;
    apiProjects.get().then(resp => data1 = resp)

    getProjects();
    console.log(projectsData)

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

function mapStateToProps({projects}) {
	return {
		  projectsData: projects.list,
    // isLoading: projects.isLoading
	};
}

const mapDispatchToProps = {
  getProjects: getProjects,
	delProject: delProject
	// changeListBreadCrumbs: changeListBreadCrumbs,
};

// function mapStateToProps({ products }) {
// 	return {
//     getProducts: getProducts,
// 		// isLoading: projects.isLoading
// 	};
// }

// const mapDispatchToProps = {
// 	changeListBreadCrumbs: changeListBreadCrumbs,
// 	getProducts: getProducts,
// 	delProduct: delProduct
// };

// saveDateNewUser: bindActionCreators(saveDateNewUser, dispatch),
// onChangeCheckBoxCreatePerson: bindActionCreators(onChangeCheckBoxCreatePerson, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(App);