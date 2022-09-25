import { ACTION_SET_RTL_MODE, ACTION_SET_LANG } from "../actions/userSettigns";

let getUserLang = navigator.language || navigator.userLanguage;
let userLang = getUserLang.substring(0, getUserLang.indexOf("-"));

const initialState = {
	rtlMode: JSON.parse(localStorage.getItem("rtlMode")) ? JSON.parse(localStorage.getItem("rtlMode")) : false,
	lang: userLang ? userLang : "en",
};

export default function (state = initialState, { type, payload }) {
	switch (type) {
		case ACTION_SET_LANG:
			return {
				...state,
				lang: payload,
			};

		case ACTION_SET_RTL_MODE:
			return {
				...state,
				rtlMode: !state.rtlMode,
			};

		default:
			return state;
	}
}
