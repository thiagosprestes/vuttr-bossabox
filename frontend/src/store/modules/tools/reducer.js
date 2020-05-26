const INITIAL_STATE = {
    update: false,
    tool: [],
    id: '',
};

export default function tools(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'UPDATE_TOOLS':
            return { ...state, update: action.update };
        case 'SELECTED_TOOL':
            return { ...state, tool: { id: action.id, title: action.title } };
        case 'DELETE_FROM_LIST':
            return { ...state, id: action.id };
        default:
            return state;
    }
}
