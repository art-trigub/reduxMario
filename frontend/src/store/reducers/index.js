import { combineReducers } from 'redux';
import menu from './menu';
import users from './users';
import breadCrumbs from './breadCrumbs'
import clientFamily from './clientFamily'
import notifications from './notifications'
import userSettings from './userSettigns'
import products from './products'
import productsCategories from './productsCategories'
import healthInsurance from './libraries/healthInsurance'
import cities from './libraries/cities'
import regions from './libraries/regions'
import statusClient from './libraries/statusClient';
import auth from './auth'
import request from './requests/requests'
import departments from "./departments";
import clientsFamilyStatusData from './commonData/clientFamilyStatusData'


export default combineReducers({
	menu: menu,
	users: users,
	breadCrumbs: breadCrumbs,
	userSettings: userSettings,
	notifications: notifications,
	products: products,
	clientFamily: clientFamily,
	productsCategories: productsCategories,
	healthInsurance: healthInsurance,
	cities: cities,
	regions: regions,
	statusClient: statusClient,
	auth: auth,
	request: request,
	departments: departments,
	clientsFamilyStatusData: clientsFamilyStatusData

});
