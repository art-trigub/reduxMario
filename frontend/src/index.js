import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ClassNames } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';


const root = ReactDOM.createRoot(document.getElementById('root'));
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        position: "fixed",
        right: "0px",
        top: "-20px",
        zIndex: "1112",
        display: 'flex',
        width: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}


export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );


  // primary: {
  //   light: '#ff9e80',
  //   main: '#212121',
  //   dark: '#121858',
  //   contrastText: '#fff',
  // },


  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            light: '#fff',
            main: '#1976d2',
            dark: '#202124',
            contrastText: '#fff',
          },
          secondary: {
            light: '#4DB6AC',
            main: '#4DB6AC',
            dark: '#202124',
            contrastText: '#000',
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <App mode={mode}/>
          <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

// const theme = createTheme({
//     palette: {
//       primary: {
//         light: '#4DB6AC',
//         main: '#424242',
//         dark: '#424242',
//         contrastText: '#fff',
//       },
//       secondary: {
//         light: '#4DB6AC',
//         main: '#4DB6AC',
//         dark: '#ba000d',
//         contrastText: '#000',
//       },
//     },
// });
root.render(
  <React.StrictMode>
      <Provider store={store}>
      <Router>
          <ToggleColorMode />
      </Router>
      </Provider>
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
