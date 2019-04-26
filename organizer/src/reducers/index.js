import { 
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions';

const initialState = {
    data: [],
    isLoggingIn: false,
    credentials: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START: {
            return {
                ...state,
                isLoggingIn: true
            };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoggingIn: false,
                credentials: action.credentials
            };
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                isLoggingIn: false
            };
        }
        default:
            return state;
    }
}

export default reducer;