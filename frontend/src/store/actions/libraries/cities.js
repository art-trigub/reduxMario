
import axios from 'axios'


export const THUNK_GET_DATA = 'THUNK_GET_DATA';
export function getData() {
    return function (dispatch, getState) {
        dispatch(loading(true));
        axios.create({
            baseURL: `https://5f3a840a2300b100169a8d1d.mockapi.io/cities`,
            headers: { 'Content-Type': 'application/json' }
        }).get('').then(resp => {
            dispatch(setData(resp.data));
            dispatch(loading(false));
        })
        console.log(getState())

    };
}

export const THUNK_DELETE_ITEM = 'THUNK_DELETE_ITEM';
export function deleteItem(id) {
    return function (dispatch) {
        dispatch(loading(true));
        axios.create({
            baseURL: `https://5f3a840a2300b100169a8d1d.mockapi.io/cities`,
            headers: { 'Content-Type': 'application/json' }
        }).delete(id).then(resp => {
            dispatch(delItem(resp.data.id));
            dispatch(loading(false));
        })
    };
}

export const THUNK_ONSAVE_ITEM = 'THUNK_ONSAVE_ITEM';
export function onSave(item) {
    return function (dispatch) {
        dispatch(loading(true));
        axios.create({
            baseURL: `https://5f3a840a2300b100169a8d1d.mockapi.io/cities`,
            headers: { 'Content-Type': 'application/json' }
        }).post('', item).then(resp => {
            dispatch(saveNewItem(resp.data));
            dispatch(loading(false));
        })
    };
}

export const THUNK_EDIT_ITEM = 'THUNK_ONSAVE_ITEM';
export function editItem(item) {
    return function (dispatch) {
        dispatch(loading(true));
        axios.create({
            baseURL: `https://5f3a840a2300b100169a8d1d.mockapi.io/cities`,
            headers: { 'Content-Type': 'application/json' }
        }).put(item.id, item).then(resp => {
            dispatch(saveEditedItem(resp.data));
            dispatch(loading(false));
        })
    };
}


export const ACTION_LOADING_CITIES = 'ACTION_LOADING_CITIES';
export function loading(payload) {
    return {
        type: ACTION_LOADING_CITIES,
        payload: payload
    };
}

export const ACTION_SET_DATA_CITIES = 'ACTION_SET_DATA_CITIES';
export function setData(data) {
    return {
        type: ACTION_SET_DATA_CITIES,
        payload: data
    };
}

export const ACTION_SAVE_NEW_ITEM_CITIES = 'ACTION_SAVE_NEW_ITEM_CITIES';
export function saveNewItem(payload) {
    return {
        type: ACTION_SAVE_NEW_ITEM_CITIES,
        payload: payload
    };
}

export const ACTION_SAVE_EDITED_ITEM_CITIES = 'ACTION_SAVE_EDITED_ITEM_CITIES';
export function saveEditedItem(payload) {
    return {
        type: ACTION_SAVE_EDITED_ITEM_CITIES,
        payload: payload
    };
}



export const ACTION_DELETE_USER_CITIES = 'ACTION_DELETE_USER_CITIES';
export function delItem(id) {
    return {
        type: ACTION_DELETE_USER_CITIES,
        payload: id
    };
}






