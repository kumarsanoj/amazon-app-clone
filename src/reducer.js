export const initialState = {
    basket: ['hello', 'world'],
}

function reducer(action, state= initialState) {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //logic for adding to basket
            break;
        case 'REMOVE_FROM_BASKET':
            //removing from basket
            break;
        default:
            return state;

    }
}

export default reducer;