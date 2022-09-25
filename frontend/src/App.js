import React, { useEffect, Suspense } from 'react'
import './App.css'
import './i18n'
import { connect } from 'react-redux'
import { create } from "jss";
import rtl from "jss-rtl";
import { SnackbarProvider } from 'notistack';
import { ThemeProvider, StylesProvider, jssPreset } from '@material-ui/core/styles';
import theme from './theme';
import rtlTheme from './theme/rtlTheme';
import SignIn from './components/Autorization/SignIn';
import Layout from './components/Layout/Layout'
import Loader from './components/CommonsComponents/Loader/Loader'


function App({ rtlMode, isLogged }) {

	const body = document.getElementById('mainBody');

	const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

	useEffect(() => {
		if (rtlMode === false) {
			body.removeAttribute('dir');
		} else {
			body.setAttribute('dir', 'rtl');
		}
	}, [rtlMode]);

	return (
		<StylesProvider jss={jss}>
			<ThemeProvider theme={rtlMode ? rtlTheme : theme}>
				<SnackbarProvider
					maxSnack={5}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right',
					}}
				>
					<Suspense fallback={<Loader />}>
						{
							isLogged
								?
								<Layout />
								:
								<SignIn />
						}
					</Suspense>
				</SnackbarProvider>
			</ThemeProvider>
		</StylesProvider>
	)
}

function mapStateToProps({ userSettings, auth }) {

	return {
		rtlMode: userSettings.rtlMode,
		userToken: auth.userToken,
		isLogged: auth.isLogged
	};

}

const mapDispatchToprops = {

};

export default connect(mapStateToProps, mapDispatchToprops)(App);
