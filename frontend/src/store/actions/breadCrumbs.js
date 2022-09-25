export const CHANGE_LIST_BREADCRUMBS_ACTION = 'CHANGE_LIST_BREADCRUMBS_ACTION';
export function changeListBreadCrumbs(item) {
    return {
        type: CHANGE_LIST_BREADCRUMBS_ACTION,
        payload: item
    };
}