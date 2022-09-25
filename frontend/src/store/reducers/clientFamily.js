
import {
    SAVE_EDITED_PERSON_ACTION,
    SAVE_FAMILY_DATA_ACTION,
    SET_NEW_USER_DATA_ACTION,
    CLEAR_NEW_USER_DATA_ACTION,
    SAVE_CHANGED_PERSON_DATA_ACTION,
    SAVE_CHANGED_DATE_NEW_USER_ACTION,
    ON_CHANGE_CHECKBOX_CREATE_PERSON_ACTION
} from '../actions/clientFamily';

const initialState = {
    data: [
        {
            id: 1,
            status: "1",
            surname: "Петров",
            name: "Дмитрий",
            tz: "30134254",
            dateOfBirth: "12.12.1997",
            gender: "Мужчина",
            hospitalCassa: "Норма",
            contacts: "0732223344",
            growth: "189",
            weight: "85",
            smoking: ""
        },
        {
            id: 2,
            status: "2",
            surname: "Петрова",
            name: "Алина",
            tz: "301542578",
            dateOfBirth: "",
            gender: "Женщина",
            hospitalCassa: "Норма",
            contacts: "0732223344",
            growth: "173",
            weight: "59",
            smoking: ""
        },
        {
            id: 3,
            status: "3",
            surname: "",
            name: "Вячеслав",
            tz: "",
            dateOfBirth: "",
            gender: "",
            hospitalCassa: "",
            contacts: "",
            growth: "",
            weight: "",
            smoking: ""
        },
    ],
    newUserData: {
        status: "",
        surname: "",
        name: "",
        tz: "",
        dateOfBirth: "",
        gender: "",
        hospitalCassa: "",
        contacts: "",
        growth: "",
        weight: "",
        smoking: ""
    },
    emptyUserData: {
        status: "",
        surname: "",
        name: "",
        tz: "",
        dateOfBirth: "",
        gender: "",
        hospitalCassa: "",
        contacts: "",
        growth: "",
        weight: "",
        smoking: ""
    },
    editedPerson: ''
};


export default function (state = initialState, { type, payload }) {
    switch (type) {

        case SAVE_EDITED_PERSON_ACTION:
            return { ...state, data: state.data.map(item => item.id === state.editedPerson.id ? state.editedPerson : item) }

        case SAVE_FAMILY_DATA_ACTION:
            let newPerson = state.newUserData
            newPerson.id = Date.now()
            return { ...state, data: [...state.data, state.newUserData] }

        case SET_NEW_USER_DATA_ACTION:
            return { ...state, newUserData: { ...state.newUserData, [payload.name]: payload.value } }

        case ON_CHANGE_CHECKBOX_CREATE_PERSON_ACTION:
            return { ...state, newUserData: { ...state.newUserData, [payload.name]: payload.checked } }

        case CLEAR_NEW_USER_DATA_ACTION:
            return { ...state, newUserData: state.emptyUserData }

        case SAVE_CHANGED_DATE_NEW_USER_ACTION:
            return { ...state, newUserData: { ...state.newUserData, dateOfBirth: payload } }


        case SAVE_CHANGED_PERSON_DATA_ACTION:
            return { ...state, editedPerson: payload }


        default:
            return state;
    }
}
