export const SAVE_DATA_LOADING_ACTION = 'SAVE_DATA_LOADING_ACTION'
export function saveDataLoading(payload) {
    return {
        type: SAVE_DATA_LOADING_ACTION,
        payload: payload
    }
}
