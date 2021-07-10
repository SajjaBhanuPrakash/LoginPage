
const initialState = {
    loggedIn: false
}

export const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGGED_IN':
            // console.log('in reducer')
            return { ...state, loggedIn: action.payload };
            break;
        default:
            return initialState
    }
}