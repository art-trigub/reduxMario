import React from "react";
import { Switch, Route } from "react-router-dom";
import Clients from "../Clients/Clients";
import Services from "../Services/Services";
import Others from "../Others/Others";
import Products from "../Products/Products";
import Users from "../Users/Users";
import ClinetsView from "../Clients/ClientView/ClinetsView";
import UserView from "../Users/UserView/UserView";
import UserForm from "../Users/UserForm/UserForm";
import ProductView from "../Products/ProductView/ProductView";
import ProductForm from "../Products/ProductForm/ProductForm";
import Home from "../Home/Home";
import Libraries from "../Libraries/Libraries";
import HealthInsurance from "../Libraries/HealthInsurance/HealthInsurance";
import City from "../Libraries/City/City";
import Regions from "../Libraries/Regions/Regions";
import StatusClient from '../Libraries/StatusClient/StatusClient'
import Requests from "../Requests/Requests";
import UserDismissal from "../Users/UsersRequests/UserDismissal/UserDismissal";



function Routes() {
	return (
		<Switch>
			{/* clients */}
			<Route
				path="/clients/:id"
				render={(route) => {
					return <ClinetsView id={route.match.params.id}></ClinetsView>;
				}}
			></Route>
			<Route path="/clients">
				<Clients></Clients>
			</Route>

			{/* services */}
			<Route path="/services">
				<Services></Services>
			</Route>

			{/* libraries */}
			<Route path="/libraries/status-client">
				<StatusClient></StatusClient>
			</Route>

			<Route path="/libraries/regions">
				<Regions></Regions>
			</Route>

			<Route path="/libraries/cities">
				<City></City>
			</Route>

			<Route path="/libraries/health-insurance">
				<HealthInsurance></HealthInsurance>
			</Route>

			<Route exact path="/libraries">
				<Libraries></Libraries>
			</Route>

			{/* requests */}
			<Route path="/requests">
				<Requests></Requests>
			</Route>

			{/* users */}
			<Route
				path="/users/update/:id"
				render={(route) => {
					return <UserForm id={route.match.params.id} />;
				}}
			/>
			<Route
				path="/users/view/:id"
				render={(route) => {
					return <UserView id={route.match.params.id} />;
				}}
			/>

			<Route path="/users/dismissal">
				<UserDismissal />
			</Route>

			<Route path="/users">
				<Users></Users>
			</Route>

			{/* others */}
			<Route path="/others">
				<Others></Others>
			</Route>

			{/* products */}
			<Route
				path="/products/update/:id"
				render={(route) => {
					return <ProductForm id={route.match.params.id} />;
				}}
			/>
			<Route
				path="/products/view/:id"
				render={(route) => {
					return <ProductView id={route.match.params.id} />;
				}}
			/>
			<Route path="/products">
				<Products></Products>
			</Route>

			{/* home */}
			<Route exact path="/">
				<Home />
			</Route>
		</Switch>
	);
}

export default Routes;
