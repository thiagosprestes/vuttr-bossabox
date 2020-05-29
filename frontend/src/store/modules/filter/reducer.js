const INITIAL_STATE = {
    data: [],
    inputValue: '',
};

export default function filter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'FILTERED_DATA':
            return { ...state, data: action.data };
        case 'INPUT_VALUE':
            return { ...state, inputValue: action.value };
        default:
            return state;
    }
}
