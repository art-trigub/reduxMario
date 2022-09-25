export const ACTION_SET_LANG = 'ACTION_SET_LANG';
export function setLang(lang) {
	return {
		type: ACTION_SET_LANG,
		payload: lang
	};
}

export const ACTION_SET_RTL_MODE = 'ACTION_SET_RTL_MODE';
export function setRtlMode() {
	return {
		type: ACTION_SET_RTL_MODE,
	};
}

export const THUNK_TOGGLE_RTL = 'THUNK_TOGGLE_RTL';
export function toggleMode() {
	return function (dispatch, getState) {
		dispatch(setRtlMode());
		const state = getState().userSettings.rtlMode;
		localStorage.setItem("rtlMode", JSON.stringify(state));
	};
}