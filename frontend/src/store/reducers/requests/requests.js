
import {
    ACTION_CHANGE_MAIN_INFO,
    ACTION_HANDLE_DATE_BIRDTH,
    ACTION_CHANGE_ADDITIONAL_INFO,
    ACTION_CHANGE_CHECKBOX_ADDITIONAL_INFO,
    SET_NEW_PERSON_ACTION,
    CLEAR_NEW_PERSON_DATA_ACTION,
    SAVE_NEW_PERSON_DATA_ACTION,
    SAVE_EDITED_PERSON_ACTION,
    SAVE_CHANGED_PERSON_DATA_ACTION,
    SAVE_CHANGED_DATE_NEW_PERSON_ACTION,
    SAVE_NEW_ADRESS_ACTION,
    ON_DELETE_FROM_TABLE_ACTION,
    ON_EDIT_FROM_TABLE_ACTION,
    SAVE_EDITING_ADRESS_ACTION,
    SAVE_NEW_CONTACT_ACTION,
    SAVE_EDITING_CONTACT_ACTION,
    ON_DELETE_CONTACT_FROM_TABLE_ACTION,
    DELETE_PERSON_ACTION,
    ACTION_CHANGE_CHECKBOX_CREATE_PERSON
} from '../../actions/requests/requests'


const initialState = {
    info: {
        firstName: '',
        surname: '',
        firstNameHebr: '',
        surnameHebr: '',
        tz: '',
        dateOfBirth: '',
        speaksRussian: '',
        speaksHebrew: '',
        speaksEnglish: ''
    },
    additionalInfo: {
        gender: "",
        maritalStatus: "",
        children: "",
        hospitalCassa: "",
        growth: "",
        weight: "",
        bmi: "",
        smoking: "",
        didSmoking: "",
        quantityCigarettes: "",
        longOutSmoking: ""

    },
    familyList: [

    ],
    newPersonData: {
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
    emptyPersonData: {
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
    editedPerson: '',
    adressesList: [],
    contactsList: [],
    isLoading: false
};


export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_CHANGE_MAIN_INFO:
            return { ...state, info: { ...state.info, [payload.name]: payload.value } }

        case ACTION_HANDLE_DATE_BIRDTH:
            return { ...state, info: { ...state.info, dateOfBirth: payload } }


        case ACTION_CHANGE_ADDITIONAL_INFO:
            return { ...state, additionalInfo: { ...state.additionalInfo, [payload.name]: payload.value } }

        case ACTION_CHANGE_CHECKBOX_ADDITIONAL_INFO:
            return { ...state, additionalInfo: { ...state.additionalInfo, [payload.name]: payload.checked } }

        case ACTION_CHANGE_CHECKBOX_CREATE_PERSON:
            return { ...state, newPersonData: { ...state.newPersonData, [payload.name]: payload.checked } }



        case SET_NEW_PERSON_ACTION:
            return { ...state, newPersonData: { ...state.newPersonData, [payload.name]: payload.value } }

        case CLEAR_NEW_PERSON_DATA_ACTION:
            return { ...state, newPersonData: state.emptyPersonData }

        case SAVE_NEW_PERSON_DATA_ACTION:
            let newPerson = state.newPersonData
            newPerson.id = Date.now()
            return { ...state, familyList: [...state.familyList, newPerson] }

        case SAVE_EDITED_PERSON_ACTION:
            return { ...state, familyList: state.familyList.map(item => item.id === state.editedPerson.id ? state.editedPerson : item) }

        case SAVE_CHANGED_PERSON_DATA_ACTION:
            return { ...state, editedPerson: payload }

        case DELETE_PERSON_ACTION:
            return { ...state, familyList: state.familyList.filter(item => item.id !== payload) }

        case SAVE_CHANGED_DATE_NEW_PERSON_ACTION:
            return { ...state, newPersonData: { ...state.newPersonData, dateOfBirth: payload } }

        case SAVE_NEW_ADRESS_ACTION:
            let newList = payload
            newList.id = Date.now()
            return { ...state, adressesList: [...state.adressesList, newList] }

        case ON_DELETE_FROM_TABLE_ACTION:
            return { ...state, adressesList: state.adressesList.filter(item => item.id !== payload) }

        case ON_EDIT_FROM_TABLE_ACTION:
            return { ...state, adressesList: state.adressesList.filter(item => item.id !== payload) }

        case SAVE_EDITING_ADRESS_ACTION:
            return { ...state, adressesList: state.adressesList.map(item => item.id === payload.id ? payload : item) }

        case SAVE_NEW_CONTACT_ACTION:
            let newListContact = payload
            newListContact.id = Date.now()
            return { ...state, contactsList: [...state.contactsList, newListContact] }

        case SAVE_EDITING_CONTACT_ACTION:
            return { ...state, contactsList: state.contactsList.map(item => item.id === payload.id ? payload : item) }

        case ON_DELETE_CONTACT_FROM_TABLE_ACTION:
            return { ...state, contactsList: state.contactsList.filter(item => item.id !== payload) }

        default:
            return state;
    }
}