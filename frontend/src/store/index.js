import { createStore } from 'redux';

const INITIAL_STATE = {
    data: [],
    id: '',
    toolData: [],
};

function tools(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'UPDATE_TOOLS':
            return { ...state, data: [action.update] };
        case 'DELETE_TOOL':
            return { ...state, id: action.toolId };
        case 'DELETE_DATA':
            return {
                ...state,
                toolData: { id: action.id, title: action.title },
            };
        default:
            return state;
    }
}

const store = createStore(tools);

export default store;
