const INITIAL_STATE = {
    data: [],
};

export default function filter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'FILTERED_DATA':
            return { ...state, data: action.data };
        default:
            return state;
    }
}
