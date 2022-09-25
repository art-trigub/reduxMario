
import {
    ACTION_SET_DATA_CITIES,
    ACTION_LOADING_CITIES,
    ACTION_DELETE_USER_CITIES,
    ACTION_SAVE_NEW_ITEM_CITIES,
    ACTION_SAVE_EDITED_ITEM_CITIES
} from '../../actions/libraries/cities'


const initialState = {
    list: [],
    isLoading: false
};


export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_SET_DATA_CITIES:
            console.log(state.list)
            return { ...state, list: payload }

        case ACTION_LOADING_CITIES:
            return { ...state, isLoading: payload }

        case ACTION_SAVE_NEW_ITEM_CITIES:
            return { ...state, list: [...state.list, payload] }

        case ACTION_DELETE_USER_CITIES:
            return { ...state, list: state.list.filter((item) => item.id !== payload) }

        case ACTION_SAVE_EDITED_ITEM_CITIES:
            return { ...state, list: state.list.map((item) => item.id === payload.id ? payload : item) }


        default:
            return state;
    }
}