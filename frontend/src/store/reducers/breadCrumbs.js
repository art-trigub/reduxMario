
import {
    CHANGE_LIST_BREADCRUMBS_ACTION
} from '../actions/breadCrumbs';


const initialState = {
    breadCrumbsList: []
};


export default function (state = initialState, { type, payload }) {
    switch (type) {

        case CHANGE_LIST_BREADCRUMBS_ACTION:
            return { ...state, breadCrumbsList: payload }
        default:
            return state;
    }
}