
import {
    ACTION_GET_STATUS_DATA
} from '../../actions/commonData/clientFamilyStatusData'


const initialState = {
    relativeStatusList: [
        {
            id: 1,
            title: 'husband'
        },
        {
            id: 2,
            title: 'wife'
        },
        {
            id: 3,
            title: 'son'
        },
        {
            id: 4,
            title: 'daughter'
        }
    ]
};


export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_GET_STATUS_DATA:
            return state

        default:
            return state;
    }
}