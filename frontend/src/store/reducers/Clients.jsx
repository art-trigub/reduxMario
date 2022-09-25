import { 
    
} from "./actions";


const initialState = {
    
}

export default function (state = initialState, action) {
    switch(action.type) {

        case SAVE_DATA_LOADING_ACTION:
            return {...state, isLoading: action.payload}

            default: 
            return state;
    }
}