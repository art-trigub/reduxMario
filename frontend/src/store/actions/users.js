import { getUser, updtUser, crtUser, getReqUsers } from "../../api/users";

import { updateUserDataLocal } from "./auth";

export const ACTION_FILTER_SELECT = "ACTION_FILTER_SELECT";
export function selectFilter(value, filter) {
	return {
		type: ACTION_FILTER_SELECT,
		payload: { name: filter, value: value },
	};
}

export const ACTION_FILTER_RESET = "ACTION_FILTER_RESET";
export function resetFilter() {
	return {
		type: ACTION_FILTER_RESET,
	};
}

export const ACTION_SET_USERS = "ACTION_SET_USERS";
export function setUsers(data) {
	return {
		type: ACTION_SET_USERS,
		payload: data,
	};
}

export const ACTION_CREATE_USER = "ACTION_CREATE_USER";
export function createUser(user) {
	return {
		type: ACTION_CREATE_USER,
		payload: user,
	};
}

export const ACTION_UPDATE_USER = "ACTION_UPDATE_USER";
export function updateUser(user) {
	return {
		type: ACTION_UPDATE_USER,
		payload: user,
	};
}

export const ACTION_LOADER_USERS = "ACTION_LOADER_USERS";
export function loaderUsers(value) {
	return {
		type: ACTION_LOADER_USERS,
		payload: value,
	};
}

export const ACTION_DELETE_USER = "ACTION_DELETE_USER";
export function deleteUser(id) {
	return {
		type: ACTION_DELETE_USER,
		payload: id,
	};
}

export const ACTION_SET_USER = "ACTION_SET_USER";
export function setUser(user) {
	return {
		type: ACTION_SET_USER,
		payload: user,
	};
}

export const THUNK_DELETE_USER = "THUNK_DELETE_USER";
export function delUser(id) {
	return function (dispatch) {
		// apiUsers.delete(id).then((resp) => {
		// 	dispatch(deleteUser(resp.data.id));
		// });
	};
}

export const THUNK_SAVE_USER = "THUNK_SAVE_USER";
export function saveUser(item) {
	return function (dispatch, getState) {
		if (item.id) {
			dispatch(loaderUsers(true));
			updtUser(item).then(
				(resp) => {
					dispatch(updateUser(resp.data));
					const userData = getState().auth.userData;
					if (resp.data.id == userData.data.id) {
						dispatch(updateUserDataLocal(resp.data));
					}
					dispatch(loaderUsers(false));
				},
				(error) => {
					dispatch(loaderUsers(false));
					alert(error.message);
				}
			);
		} else {
			dispatch(loaderUsers(true));
			crtUser(item).then((resp) => {
				dispatch(createUser(resp.data));
				dispatch(loaderUsers(false));
			});
		}
	};
}

export const THUNK_GET_USER = "THUNK_GET_USER";
export function getThisUser(id) {
	return function (dispatch) {
		dispatch(loaderUsers(true));
		getUser(id).then((resp) => {
			dispatch(setUser(resp.data));
			dispatch(loaderUsers(false));
		});
	};
}

export const THUNK_GET_REQUEST_USERS = "THUNK_GET_REQUEST_USERS";
export function getRequestUsers(request) {
	return function (dispatch) {
		dispatch(loaderUsers(true));
		getReqUsers(request).then((resp) => {
			dispatch(setUsers(resp.data));
			dispatch(loaderUsers(false));
		});
	};
}
