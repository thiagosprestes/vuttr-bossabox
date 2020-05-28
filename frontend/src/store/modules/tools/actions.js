export function newTool(toolData) {
    return {
        type: 'ADD_TOOL',
        toolData,
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
