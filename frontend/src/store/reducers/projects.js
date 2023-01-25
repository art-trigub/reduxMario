import {
	ACTION_SET_PROJECTS,
	ACTION_CREATE_PROJECT,
	ACTION_UPDATE_PROJECT,
	ACTION_LOADER_PROJECTS,
	ACTION_DELETE_PROJECT
} from '../actions/projects'


const initialState = {
	list: [],
	isLoading: false
};

function updateProject(list, data) {
	return list.map(item => (item.id === data.id ? data : item));
}

function createProject(list, item) {
	return [...list, item]
}

export default function (state = initialState, { type, payload }) {
	switch (type) {

		case ACTION_SET_PROJECTS:

			return {
				...state,
				list: payload
			}

		case ACTION_DELETE_PROJECT:

			return {
				...state,
				list: state.list.filter(item => item.id !== payload)
			};

		case ACTION_UPDATE_PROJECT:

			return {
				...state,
				list: updateProject(state.list, payload)
			};

		case ACTION_LOADER_PROJECTS:

			return {
				...state,
				isLoading: payload
			}

		case ACTION_CREATE_PROJECT:

			return {
				...state,
				list: createProject(state.list, payload)
			};

		default:
			return state;
	}
}
