import menuData from '../../components/Layout/menuItems.json'

import {
	ACTION_ADD_MENUITEM_TO_FAVMENU,
	ACTION_REMOVE_MENUITEM_FROM_FAVMENU
} from '../actions/menu';


const initialState = {
	menu: menuData,
	favMenu: JSON.parse(localStorage.getItem('userFavMenu')) ? JSON.parse(localStorage.getItem('userFavMenu')) : []
};

function createMenuItem(list, item) {
	return [...list, item]
}

export default function (state = initialState, { type, payload }) {
	switch (type) {

		case ACTION_ADD_MENUITEM_TO_FAVMENU:

			return {
				...state,
				favMenu: createMenuItem(state.favMenu, payload)
			}

		case ACTION_REMOVE_MENUITEM_FROM_FAVMENU:

			return {
				...state,
				favMenu: state.favMenu.filter(item => item.name !== payload)
			};

		default:
			return state;
	}
}