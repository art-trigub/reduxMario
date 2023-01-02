import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Testnet from "../components/Testnets/Testnet";
import Oneproject from "../components/custom/Oneproject";
import Projects from "../components/Projects/Projects";
import SignIn from "../components/Autorization/SignIn";




function Routes({mode}) {
	return (
		<Switch>
			{/* clients */}

			<Route path="/projects">
				<Projects></Projects>
			</Route>

			<Route path="/testnet">
				<Testnet mode={mode}></Testnet>
			</Route>

			<Route path="/project">
				<Oneproject mode={mode}></Oneproject>
			</Route>

			<Route path="/login">
				<SignIn></SignIn>
			</Route>
			<Route exact path="/">
				<Home mode={mode}/>
			</Route>
		</Switch>
	);
}

export default Routes;
