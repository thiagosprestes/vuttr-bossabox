export function updateToolsList(updateState) {
    return {
        type: 'UPDATE_TOOLS',
        updateState,
    };
}

export function deleteToolFromList(id) {
    return {
        type: 'DELETE_FROM_LIST',
        id,
    };
}

export function selectedToolData(id, title) {
    return {
        type: 'SELECTED_TOOL',
        id,
        title,
    };
}
