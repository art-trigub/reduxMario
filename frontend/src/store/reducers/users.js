import {
	ACTION_SET_USERS,
	ACTION_SET_USER,
	ACTION_CREATE_USER,
	ACTION_UPDATE_USER,
	ACTION_LOADER_USERS,
	ACTION_DELETE_USER,
	ACTION_FILTER_SELECT,
	ACTION_FILTER_RESET,
} from "../actions/users";

const initialState = {
	list: [],
	isLoading: false,
	filtered: {
		firstName: "",
		lastName: "",
		departmentId: "",
		roleId: "",
		externalNumber: "",
		dateOfBirth: "",
		email: "",
	},
};

function updateUser(list, data) {
	return list.map((item) => (item.id === data.id ? data : item));
}

function createUser(list, item) {
	return [...list, item];
}

export default function (state = initialState, { type, payload }) {
	switch (type) {
		case ACTION_FILTER_SELECT:
			return {
				...state,
				filtered: {
					...state.filtered,
					[payload.name]: payload.value,
				},
			};

		case ACTION_FILTER_RESET: {
			return {
				...state,
				filtered: {
					firstName: "",
					lastName: "",
					departmentId: "",
					roleId: "",
					externalNumber: "",
					dateOfBirth: "",
					email: "",
				},
			};
		}

		case ACTION_SET_USERS:
			return {
				...state,
				list: payload,
			};

		case ACTION_SET_USER:
			return {
				...state,
				list: [...state.list, payload],
			};

		case ACTION_DELETE_USER:
			return {
				...state,
				list: state.list.filter((item) => item.id !== payload),
			};

		case ACTION_UPDATE_USER:
			return {
				...state,
				list: updateUser(state.list, payload),
			};

		case ACTION_LOADER_USERS:
			return {
				...state,
				isLoading: payload,
			};

		case ACTION_CREATE_USER:
			return {
				...state,
				list: createUser(state.list, payload),
			};

		default:
			return state;
	}
}
