
const initialState = {
    loggedIn: false
}

export const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGGED_IN':
            return { ...state, loggedIn: action.payload };
            break;
        default:
            return initialState
    }
}