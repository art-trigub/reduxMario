import axios from 'axios'
import apiProducts from '../../services/apiProducts'

export const ACTION_SET_PRODUCTS = 'ACTION_SET_PRODUCTS';
export function setProducts(data) {
	return {
		type: ACTION_SET_PRODUCTS,
		payload: data
	};
}

export const ACTION_CREATE_PRODUCT = 'ACTION_CREATE_PRODUCT';
export function createProduct(product) {
	return {
		type: ACTION_CREATE_PRODUCT,
		payload: product
	};
}

export const ACTION_UPDATE_PRODUCT = 'ACTION_UPDATE_PRODUCT';
export function updateProduct(product) {
	return {
		type: ACTION_UPDATE_PRODUCT,
		payload: product
	};
}

export const ACTION_LOADER_PRODUCTS = 'ACTION_LOADER_PRODUCTS';
export function loaderProducts(value) {
	return {
		type: ACTION_LOADER_PRODUCTS,
		payload: value
	};
}

export const ACTION_DELETE_PRODUCT = 'ACTION_DELETE_PRODUCT';
export function deleteProduct(id) {
	return {
		type: ACTION_DELETE_PRODUCT,
		payload: id
	};
}

export const THUNK_DELETE_PRODUCT = 'THUNK_DELETE_PRODUCT';
export function delProduct(id) {
	return function (dispatch) {
		apiProducts.delete(id).then(resp => {
			dispatch(deleteProduct(resp.data.id));
		})
	};
}

export const THUNK_SAVE_PRODUCT = 'THUNK_SAVE_PRODUCT';
export function saveProduct(item) {
	return function (dispatch) {
		if (item.id) {
			apiProducts.put(item.id, item).then(resp => {
				dispatch(updateProduct(resp.data));
			})
		} else {
			apiProducts.post('', item).then(resp => {
				dispatch(createProduct(resp.data));
			})
		}
	};
}

export const THUNK_GET_PRODUCTS = 'THUNK_GET_PRODUCTS';
export function getProducts() {
	return function (dispatch) {
		dispatch(loaderProducts(true));
		apiProducts.get('').then(resp => {
			dispatch(setProducts(resp.data));
			dispatch(loaderProducts(false));
		})
	};
}

export const THUNK_GET_PRODUCT = 'THUNK_GET_PRODUCT';
export function getProduct(id) {
	return function (dispatch) {
		axios.create({
			baseURL: `https://5f2588f7c85de200162931f8.mockapi.io/users/products/${id}`,
			headers: { 'Content-Type': 'application/json' }
		}).get('').then(resp => {
			dispatch(setProducts(resp.data));
		})
	};
}