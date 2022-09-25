import axios from 'axios'

// export const THUNK_EDIT_ITEM = 'THUNK_ONSAVE_ITEM';
// export function editItem(item) {
//     return function (dispatch) {
//         dispatch(loading(true));
//         axios.create({
//             baseURL: `https://5f3a840a2300b100169a8d1d.mockapi.io/HealthInsurance`,
//             headers: { 'Content-Type': 'application/json' }
//         }).put(item.id, item).then(resp => {
//             dispatch(saveEditedItem(resp.data));
//             dispatch(loading(false));
//         })
//     };
// }


export const ACTION_CHANGE_MAIN_INFO = 'ACTION_CHANGE_MAIN_INFO';
export function onChangeMainInfo(payload) {
    return {
        type: ACTION_CHANGE_MAIN_INFO,
        payload: payload
    };
}

export const ACTION_HANDLE_DATE_BIRDTH = 'ACTION_HANDLE_DATE_BIRDTH';
export function handleDateOfBirth(payload) {
    return {
        type: ACTION_HANDLE_DATE_BIRDTH,
        payload: payload
    };
}

export const ACTION_CHANGE_ADDITIONAL_INFO = 'ACTION_CHANGE_ADDITIONAL_INFO';
export function onChangeAdditionalInfo(payload) {
    return {
        type: ACTION_CHANGE_ADDITIONAL_INFO,
        payload: payload
    };
}

export const ACTION_CHANGE_CHECKBOX_ADDITIONAL_INFO = 'ACTION_CHANGE_CHECKBOX_ADDITIONAL_INFO';
export function onChangeCheckBoxAdditionalInfo(payload) {
    return {
        type: ACTION_CHANGE_CHECKBOX_ADDITIONAL_INFO,
        payload: payload
    };
}

export const ACTION_CHANGE_CHECKBOX_CREATE_PERSON = 'ACTION_CHANGE_CHECKBOX_CREATE_PERSON';
export function onChangeCheckBoxCreatePerson(payload) {
    return {
        type: ACTION_CHANGE_CHECKBOX_CREATE_PERSON,
        payload: payload
    };
}



export const SAVE_EDITED_PERSON_ACTION = 'SAVE_EDITED_PERSON_ACTION';
export function saveEditedData() {
    return {
        type: SAVE_EDITED_PERSON_ACTION,
    };
}

export const SAVE_NEW_PERSON_DATA_ACTION = 'SAVE_NEW_PERSON_DATA_ACTION';
export function saveFamilyData() {
    return {
        type: SAVE_NEW_PERSON_DATA_ACTION
    };
}

export const SET_NEW_PERSON_ACTION = 'SET_NEW_PERSON_ACTION';
export function setNewPersonData(payload) {
    return {
        type: SET_NEW_PERSON_ACTION,
        payload: payload

    };
}

export const CLEAR_NEW_PERSON_DATA_ACTION = 'CLEAR_NEW_PERSON_DATA_ACTION';
export function clearNewPersonData(payload) {
    return {
        type: CLEAR_NEW_PERSON_DATA_ACTION,
        payload: payload
    };
}

export const SAVE_CHANGED_DATE_NEW_PERSON_ACTION = 'SAVE_CHANGED_DATE_NEW_PERSON_ACTION';
export function saveDateNewPerson(payload) {
    return {
        type: SAVE_CHANGED_DATE_NEW_PERSON_ACTION,
        payload: payload
    };
}



export const SAVE_CHANGED_PERSON_DATA_ACTION = 'SAVE_CHANGED_PERSON_DATA_ACTION';
export function saveChangedPersonData(payload) {
    return {
        type: SAVE_CHANGED_PERSON_DATA_ACTION,
        payload: payload
    };
}

export const DELETE_PERSON_ACTION = 'DELETE_PERSON_ACTION';
export function deletePerson(payload) {
    return {
        type: DELETE_PERSON_ACTION,
        payload: payload
    };
}



export const SAVE_NEW_ADRESS_ACTION = 'SAVE_NEW_ADRESS_ACTION';
export function saveNewAdress(payload) {
    return {
        type: SAVE_NEW_ADRESS_ACTION,
        payload: payload
    };
}

export const ON_DELETE_FROM_TABLE_ACTION = 'ON_DELETE_FROM_TABLE_ACTION';
export function onDeleteFromTable(payload) {
    return {
        type: ON_DELETE_FROM_TABLE_ACTION,
        payload: payload
    };
}

export const ON_EDIT_FROM_TABLE_ACTION = 'ON_EDIT_FROM_TABLE_ACTION';
export function onEditFromtable(payload) {
    return {
        type: ON_EDIT_FROM_TABLE_ACTION,
        payload: payload
    };
}

export const SAVE_EDITING_ADRESS_ACTION = 'SAVE_EDITING_ADRESS_ACTION';
export function saveEditingAdress(payload) {
    return {
        type: SAVE_EDITING_ADRESS_ACTION,
        payload: payload
    };
}


export const SAVE_NEW_CONTACT_ACTION = 'SAVE_NEW_CONTACT_ACTION';
export function saveNewContact(payload) {
    return {
        type: SAVE_NEW_CONTACT_ACTION,
        payload: payload
    };
}


export const SAVE_EDITING_CONTACT_ACTION = 'SAVE_EDITING_CONTACT_ACTION';
export function saveEditingContact(payload) {
    return {
        type: SAVE_EDITING_CONTACT_ACTION,
        payload: payload
    };
}

export const ON_DELETE_CONTACT_FROM_TABLE_ACTION = 'ON_DELETE_CONTACT_FROM_TABLE_ACTION';
export function onDeleteContactFromTable(payload) {
    return {
        type: ON_DELETE_CONTACT_FROM_TABLE_ACTION,
        payload: payload
    };
}





