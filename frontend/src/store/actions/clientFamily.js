export const SAVE_EDITED_PERSON_ACTION = 'SAVE_EDITED_PERSON_ACTION';
export function saveEditedData() {
    return {
        type: SAVE_EDITED_PERSON_ACTION,
    };
}


export const SAVE_FAMILY_DATA_ACTION = 'SAVE_FAMILY_DATA_ACTION';
export function saveFamilyData() {
    return {
        type: SAVE_FAMILY_DATA_ACTION
    };
}

export const SET_NEW_USER_DATA_ACTION = 'SET_NEW_USER_DATA_ACTION';
export function setNewUserData(payload) {
    return {
        type: SET_NEW_USER_DATA_ACTION,
        payload: payload

    };
}

export const ON_CHANGE_CHECKBOX_CREATE_PERSON_ACTION = 'ON_CHANGE_CHECKBOX_CREATE_PERSON_ACTION';
export function onChangeCheckBoxCreatePerson(payload) {
    return {
        type: ON_CHANGE_CHECKBOX_CREATE_PERSON_ACTION,
        payload: payload

    };
}

export const CLEAR_NEW_USER_DATA_ACTION = 'CLEAR_NEW_USER_DATA_ACTION';
export function clearNewUserData(payload) {
    return {
        type: CLEAR_NEW_USER_DATA_ACTION,
        payload: payload
    };
}

export const SAVE_CHANGED_DATE_NEW_USER_ACTION = 'SAVE_CHANGED_DATE_NEW_USER_ACTION';
export function saveDateNewUser(payload) {
    return {
        type: SAVE_CHANGED_DATE_NEW_USER_ACTION,
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





