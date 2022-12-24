import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
    palette: {
      primary: {
        light: '#4DB6AC',
        main: '#424242',
        dark: '#424242',
        contrastText: '#fff',
      },
      secondary: {
        light: '#4DB6AC',
        main: '#4DB6AC',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
});
root.render(
  <React.StrictMode>
      <Provider store={store}>
      <Router>
      <ThemeProvider theme={theme}> 
          <App />
      </ThemeProvider>
      </Router>
      </Provider>
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
