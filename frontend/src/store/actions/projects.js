import axios from 'axios'
import apiProjects from '../../services/apiProjects'

export const ACTION_SET_PROJECTS = 'ACTION_SET_PROJECTS';
export function setProjects(data) {
	return {
		type: ACTION_SET_PROJECTS,
		payload: data
	};
}

export const ACTION_CREATE_PROJECT = 'ACTION_CREATE_PROJECT';
export function createProject(project) {
	return {
		type: ACTION_CREATE_PROJECT,
		payload: project
	};
}

export const ACTION_UPDATE_PROJECT = 'ACTION_UPDATE_PROJECT';
export function updateProject(project) {
	return {
		type: ACTION_UPDATE_PROJECT,
		payload: project
	};
}

export const ACTION_LOADER_PROJECTS = 'ACTION_LOADER_PROJECTS';
export function loaderProjects(value) {
	return {
		type: ACTION_LOADER_PROJECTS,
		payload: value
	};
}

export const ACTION_DELETE_PROJECT = 'ACTION_DELETE_PROJECT';
export function deleteProject(id) {
	return {
		type: ACTION_DELETE_PROJECT,
		payload: id
	};
}

export const THUNK_DELETE_PROJECT = 'THUNK_DELETE_PROJECT';
export function delProject(id) {
	return function (dispatch) {
		apiProjects.delete(id).then(resp => {
			dispatch(deleteProject(resp.data.id));
		})
	};
}

export const THUNK_SAVE_PROJECT = 'THUNK_SAVE_PROJECT';
export function saveProject(item) {
	return function (dispatch) {
		if (item.id) {
			apiProjects.put(item.id, item).then(resp => {
				dispatch(updateProject(resp.data));
			})
		} else {
			apiProjects.post('', item).then(resp => {
				dispatch(createProject(resp.data));
			})
		}
	};
}

export const THUNK_GET_PROJECTS = 'THUNK_GET_PROJECTS';
export function getProjects() {
	return function (dispatch) {
		dispatch(loaderProjects(true));
		apiProjects.get('').then(resp => {
			dispatch(setProjects(resp.data));
			dispatch(loaderProjects(false));
		})
	};
}

export const THUNK_GET_PROJECT = 'THUNK_GET_PROJECT';
export function getProject(id) {
	return function (dispatch) {
		axios.create({
			baseURL: `https://63d0bef1120b32bbe8ea3d0b.mockapi.io/projects/${id}`,
			headers: { 'Content-Type': 'application/json' }
		}).get('').then(resp => {
			dispatch(setProjects(resp.data));
		})
	};
}