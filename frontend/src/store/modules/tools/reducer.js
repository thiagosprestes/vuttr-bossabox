const INITIAL_STATE = {
    newTool: [],
    tool: [],
    id: '',
};

export default function tools(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TOOL':
            return { ...state, newTool: action.toolData };
        case 'SELECTED_TOOL':
            return { ...state, tool: { id: action.id, title: action.title } };
        case 'DELETE_FROM_LIST':
            return { ...state, id: action.id };
        default:
            return state;
    }
}
