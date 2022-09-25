export const ACTION_ADD_MENUITEM_TO_FAVMENU = 'ACTION_ADD_MENUITEM_TO_FAVMENU';
export function addToFavMenu(item) {
    return {
        type: ACTION_ADD_MENUITEM_TO_FAVMENU,
        payload: item
    };
}

export const ACTION_REMOVE_MENUITEM_FROM_FAVMENU = 'ACTION_REMOVE_MENUITEM_FROM_FAVMENU';
export function removeFromFavMenu(item) {
    return {
        type: ACTION_REMOVE_MENUITEM_FROM_FAVMENU,
        payload: item
    };
}

export const THUNK_ADD_ITEM_TO_LOCAL_FAVMENU = 'THUNK_ADD_ITEM_TO_LOCAL_FAVMENU';
export function addFavMenu(item) {
    return function (dispatch, getState) {
        dispatch(addToFavMenu(item));
        const state = getState().menu.favMenu;
        localStorage.setItem("userFavMenu", JSON.stringify(state));
    };
}

export const THUNK_REMOVE_ITEM_FROM_LOCAL_FAVMENU = 'THUNK_REMOVE_ITEM_FROM_LOCAL_FAVMENU';
export function removeFavMenu(item) {
    return function (dispatch, getState) {
        dispatch(removeFromFavMenu(item));
        const state = getState().menu.favMenu;
        localStorage.setItem("userFavMenu", JSON.stringify(state));
    };
}
