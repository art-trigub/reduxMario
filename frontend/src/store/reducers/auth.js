import storage from "../../services/storage";

import {
	SET_USER_TOKEN_ACTION,
	SET_USER_DATA_ACTION,
	SET_LOGGED_USER_ACTION,
	USER_LOGOUT_ACTION,
	USER_UPDATE_ACTION,
} from "../actions/auth";

const initialState = {
	userToken: storage.getToken() ? storage.getToken() : false,
	userData: storage.get("userData") ? JSON.parse(storage.get("userData")) : false,
	isLogged: storage.get("isLogged") ? storage.get("isLogged") : false,
};

// m.tarantsova
// password

export default function (state = initialState, { type, payload }) {
	switch (type) {
		case SET_USER_TOKEN_ACTION:
			return {
				...state,
				userToken: payload,
			};

		case SET_USER_DATA_ACTION:
			return {
				...state,
				userData: payload,
			};

		case SET_LOGGED_USER_ACTION:
			return {
				...state,
				isLogged: true,
			};

		case USER_LOGOUT_ACTION:
			return {
				userToken: false,
				userData: false,
				isLogged: false,
			};

		case USER_UPDATE_ACTION:
			return {
				...state,
				userData: {
					...state.userData,
					data: payload,
				},
			};

		default:
			return state;
	}
}
