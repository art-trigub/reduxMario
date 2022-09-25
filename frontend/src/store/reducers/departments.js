import { ACTION_SET_DEPARTMENTS } from "../actions/departments";

const initialState = {
	departmentsList: [],
	rolesList: [],
};

export default function (state = initialState, { type, payload }) {
	switch (type) {
		case ACTION_SET_DEPARTMENTS:
			return {
				...state,
				departmentsList: payload.departments,
				rolesList: payload.roles,
			};

		default:
			return state;
	}
}
