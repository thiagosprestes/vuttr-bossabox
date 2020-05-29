export function filterByName(data) {
    return {
        type: 'FILTERED_DATA',
        data,
    };
}

export function inputValue(value) {
    return {
        type: 'INPUT_VALUE',
        value,
    };
}
