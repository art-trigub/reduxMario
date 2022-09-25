
import {
    ACTION_SET_DATA_INSSURANCE,
    ACTION_LOADING_INSSURANCE,
    ACTION_DELETE_USER_INSSURANCE,
    ACTION_SAVE_NEW_ITEM_INSSURANCE,
    ACTION_SAVE_EDITED_ITEM_INSSURANCE
} from '../../actions/libraries/healthInsurance'


const initialState = {
    list: [],
    isLoading: false
};


export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_SET_DATA_INSSURANCE:
            return { ...state, list: payload }

        case ACTION_LOADING_INSSURANCE:
            return { ...state, isLoading: payload }

        case ACTION_SAVE_NEW_ITEM_INSSURANCE:
            return { ...state, list: [...state.list, payload] }

        case ACTION_DELETE_USER_INSSURANCE:
            return { ...state, list: state.list.filter((item) => item.id !== payload) }

        case ACTION_SAVE_EDITED_ITEM_INSSURANCE:
            return { ...state, list: state.list.map((item) => item.id === payload.id ? payload : item) }


        default:
            return state;
    }
}