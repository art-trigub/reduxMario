import { getAllDepartments } from "../../api/departments";

export const ACTION_SET_DEPARTMENTS = "ACTION_SET_DEPARTMENTS";
export function setDepartments(data) {
	return {
		type: ACTION_SET_DEPARTMENTS,
		payload: data,
	};
}

export const THUNK_GET_DEPARTMENTS = "THUNK_GET_DEPARTMENTS";
export function getDepartments() {
	return function (dispatch) {
		getAllDepartments().then((resp) => {
			dispatch(setDepartments(resp.data));
		});
	};
}
