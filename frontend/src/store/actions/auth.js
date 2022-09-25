import storage from '../../services/storage'


export const SET_USER_TOKEN_ACTION = 'SET_USER_TOKEN_ACTION';
export function setUserToken(token) {
	return {
		type: SET_USER_TOKEN_ACTION,
		payload: token
	};
}

export const SET_USER_DATA_ACTION = 'SET_USER_DATA_ACTION';
export function setUserData(data) {
	return {
		type: SET_USER_DATA_ACTION,
		payload: data
	};
}

export const SET_LOGGED_USER_ACTION = 'SET_LOGGED_USER_ACTION';
export function setLoggedUser() {
	return {
		type: SET_LOGGED_USER_ACTION,
	};
}

export const USER_LOGOUT_ACTION = 'USER_LOGOUT_ACTION';
export function userLogout() {
	return {
		type: USER_LOGOUT_ACTION,
	};
}

export const USER_UPDATE_ACTION = 'USER_UPDATE_ACTION';
export function updateUserData(data) {
	return {
		type: USER_UPDATE_ACTION,
		payload: data
	};
}

export const THUNK_USER_TOKEN = 'THUNK_USER_TOKEN';
export function setUserTokenLocal(token) {
	return async function (dispatch, getState) {
		dispatch(setUserToken(token));
		const state = getState().auth.userToken;
		storage.setToken(state.data.token);
	};
}

export const THUNK_UPDATE_USER_DATA = 'THUNK_UPDATE_USER_DATA';
export function updateUserDataLocal(data) {
	return async function (dispatch, getState) {
		dispatch(updateUserData(data));
		const state = getState().auth.userData;
		storage.set('userData', JSON.stringify(state));
	};
}

export const THUNK_USER_DATA = 'THUNK_USER_DATA';
export function setUserDataLocal(data) {
	return async function (dispatch, getState) {
		dispatch(setUserData(data));
		const state = getState().auth.userData;
		storage.set('userData', JSON.stringify(state));
	};
}

export const THUNK_USER_LOGGED = 'THUNK_USER_LOGGED';
export function setLoggedUserLocal(value) {
	return async function (dispatch, getState) {
		dispatch(setLoggedUser(value));
		const state = getState().auth.isLogged;
		storage.set('isLogged', state);
	};
}

export const THUNK_USER_LOGOUT = 'THUNK_USER_LOGOUT';
export function userLogoutLocal() {
	return async function (dispatch, getState) {
		dispatch(userLogout());
		storage.removeToken();
		storage.removeItem('userData');
		storage.removeItem('isLogged');

	};
}
