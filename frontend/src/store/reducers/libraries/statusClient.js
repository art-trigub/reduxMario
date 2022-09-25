
import {
    ACTION_SET_DATA_STATUS_CLIENT,
    ACTION_LOADING_STATUS_CLIENT,
    ACTION_DELETE_USER_STATUS_CLIENT,
    ACTION_SAVE_NEW_ITEM_STATUS_CLIENT,
    ACTION_SAVE_EDITED_ITEM_STATUS_CLIENT
} from '../../actions/libraries/statusClient'


const initialState = {
    list: [],
    isLoading: false
};


export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_SET_DATA_STATUS_CLIENT:

            return { ...state, list: payload }

        case ACTION_LOADING_STATUS_CLIENT:
            return { ...state, isLoading: payload }

        case ACTION_SAVE_NEW_ITEM_STATUS_CLIENT:
            return { ...state, list: [...state.list, payload] }

        case ACTION_DELETE_USER_STATUS_CLIENT:
            return { ...state, list: state.list.filter((item) => item.id !== payload) }

        case ACTION_SAVE_EDITED_ITEM_STATUS_CLIENT:
            return { ...state, list: state.list.map((item) => item.id === payload.id ? payload : item) }


        default:
            return state;
    }
}