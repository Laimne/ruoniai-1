function countReducer(state, action) {
    let stateCopy = state;

    switch (action.type) {
        case 'add_one':
            stateCopy++;
            break;
        case 'remove_one':
            stateCopy--;
            break;
        default:
    }


    return stateCopy;
}

export default countReducer;