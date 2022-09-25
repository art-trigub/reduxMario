import axios from "axios";

export const ACTION_SET_PRODUCTS_CATEGORIES = "ACTION_SET_PRODUCTS_CATEGORIES";
export function setProductsCategories(data) {
	return {
		type: ACTION_SET_PRODUCTS_CATEGORIES,
		payload: data,
	};
}

export const ACTION_CREATE_PRODUCT_CATEGORY = "ACTION_CREATE_PRODUCT_CATEGORY";
export function createProductCategory(product) {
	return {
		type: ACTION_CREATE_PRODUCT_CATEGORY,
		payload: product,
	};
}

export const ACTION_UPDATE_PRODUCT_CATEGORY = "ACTION_UPDATE_PRODUCT_CATEGORY";
export function updateProductCategory(productCategory) {
	return {
		type: ACTION_UPDATE_PRODUCT_CATEGORY,
		payload: productCategory,
	};
}

export const ACTION_LOADER_PRODUCTS_CATEGORIES =
	"ACTION_LOADER_PRODUCTS_CATEGORIES";
export function loaderProductsCategories(value) {
	return {
		type: ACTION_LOADER_PRODUCTS_CATEGORIES,
		payload: value,
	};
}

export const ACTION_DELETE_PRODUCT_CATEGORY = "ACTION_DELETE_PRODUCT_CATEGORY";
export function deleteProductCategory(id) {
	return {
		type: ACTION_DELETE_PRODUCT_CATEGORY,
		payload: id,
	};
}

export const THUNK_DELETE_PRODUCT_CATEGORY = "THUNK_DELETE_PRODUCT_CATEGORY";
export function delProductCategory(id, productId) {
	return function (dispatch) {
		axios
			.create({
				baseURL: `https://5f2588f7c85de200162931f8.mockapi.io/users/products/${productId}/categories`,
				headers: { "Content-Type": "application/json" },
			})
			.delete(id)
			.then((resp) => {
				dispatch(deleteProductCategory(resp.data.id));
			});
	};
}

export const THUNK_SAVE_PRODUCT_CATEGORY = "THUNK_SAVE_PRODUCT_CATEGORY";
export function saveProductCategoty(item, productId) {
	return function (dispatch) {
		if (item.id) {
			axios
				.create({
					baseURL: `https://5f2588f7c85de200162931f8.mockapi.io/users/products/${productId}/categories/`,
					headers: { "Content-Type": "application/json" },
				})
				.put(item.id, item)
				.then((resp) => {
					dispatch(updateProductCategory(resp.data));
				});
		} else {
			axios
				.create({
					baseURL: `https://5f2588f7c85de200162931f8.mockapi.io/users/products/${productId}/categories/`,
					headers: { "Content-Type": "application/json" },
				})
				.post("", item)
				.then((resp) => {
					dispatch(createProductCategory(resp.data));
				});
		}
	};
}

export const THUNK_GET_PRODUCTS_CATEGORIES = "THUNK_GET_PRODUCTS_CATEGORIES";
export function getProductsCategories(id) {
	return function (dispatch) {
		axios
			.create({
				baseURL: `https://5f2588f7c85de200162931f8.mockapi.io/users/products/${id}/categories`,
				headers: { "Content-Type": "application/json" },
			})
			.get("")
			.then((resp) => {
				dispatch(setProductsCategories(resp.data));
			});
	};
}
