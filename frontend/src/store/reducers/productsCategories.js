import {
	ACTION_SET_PRODUCTS_CATEGORIES,
	ACTION_CREATE_PRODUCT_CATEGORY,
	ACTION_UPDATE_PRODUCT_CATEGORY,
	ACTION_LOADER_PRODUCTS_CATEGORIES,
	ACTION_DELETE_PRODUCT_CATEGORY
} from '../actions/productsCategories'


const initialState = {
	list: [],
	isLoading: false
};


function updateProductCategory(list, data) {
	return list.map(item => (item.id === data.id ? data : item));
}

function createProductCategory(list, item) {
	return [...list, item]
}


export default function (state = initialState, { type, payload }) {
	switch (type) {

		case ACTION_SET_PRODUCTS_CATEGORIES:

			return {
				...state,
				list: payload
			}

		case ACTION_DELETE_PRODUCT_CATEGORY:

			return {
				...state,
				list: state.list.filter(item => item.id !== payload)
			};

		case ACTION_UPDATE_PRODUCT_CATEGORY:

			return {
				...state,
				list: updateProductCategory(state.list, payload)
			};

		case ACTION_LOADER_PRODUCTS_CATEGORIES:

			return {
				...state,
				isLoading: payload
			}

		case ACTION_CREATE_PRODUCT_CATEGORY:

			return {
				...state,
				list: createProductCategory(state.list, payload)
			};

		default:
			return state;
	}
}
