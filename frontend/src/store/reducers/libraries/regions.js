
import {
    ACTION_SET_DATA_REGIONS,
    ACTION_LOADING_REGIONS,
    ACTION_DELETE_USER_REGIONS,
    ACTION_SAVE_NEW_ITEM_REGIONS,
    ACTION_SAVE_EDITED_ITEM_REGIONS
} from '../../actions/libraries/regions'


const initialState = {
    list: [],
    isLoading: false
};


export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_SET_DATA_REGIONS:

            return { ...state, list: payload }

        case ACTION_LOADING_REGIONS:
            return { ...state, isLoading: payload }

        case ACTION_SAVE_NEW_ITEM_REGIONS:
            return { ...state, list: [...state.list, payload] }

        case ACTION_DELETE_USER_REGIONS:
            return { ...state, list: state.list.filter((item) => item.id !== payload) }

        case ACTION_SAVE_EDITED_ITEM_REGIONS:
            return { ...state, list: state.list.map((item) => item.id === payload.id ? payload : item) }


        default:
            return state;
    }
}