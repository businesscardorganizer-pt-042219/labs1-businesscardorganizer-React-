import { 
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    GET_CARD_BY_ID_START,
    GET_CARD_BY_ID_SUCCESS,
    GET_CARD_BY_ID_FAILURE,
    ADD_CARD_START,
    ADD_CARD_SUCCESS,
    ADD_CARD_FAILURE,
    DELETE_CARD_START,
    DELETE_CARD_SUCCESS,
    DELETE_CARD_FAILURE
} from '../actions';

const initialState = {
    cards: [],
    cardById: [],
    isLoggingIn: false,
    credentials: [],
    fetchingCards: false,
    savingCard: false,
    deletingCard: false,
    error: ''
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
        case FETCH_DATA_START:
            return {
                ...state,
                error: '',
                fetchingCards: true
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                fetchingCards: false,
                cards: action.payload
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchingCards: false
            };
        case GET_CARD_BY_ID_START:
            return {
                ...state,
                error: '',
                fetchingCards: true
            };
        case GET_CARD_BY_ID_SUCCESS:
            return {
                ...state,
                error: '',
                fetchingCards: false,
                cardById: action.payload
            };
        case GET_CARD_BY_ID_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchingCards: false
            };
        case ADD_CARD_START:
            return {
                ...state,
                error: '',
                savingCard: true,
            }
        case ADD_CARD_SUCCESS:
            return {
                ...state,
                savingCard: false,
                cards: [...state.cards, action.payload]
            };
        case ADD_CARD_FAILURE:
            return {
                ...state,
                error: action.payload,
                savingCard: false
            };
        case DELETE_CARD_START:
            return {
                ...state,
                error: '',
                deletingCard: true,
            }
        case DELETE_CARD_SUCCESS:
            return {
                ...state,
                deletingCard: false,
                cards: state.cards.filter(card => {
                    if (card.id !== action.payload) {
                        return card
                    } else {
                        return null
                    }
                })
            }
        case DELETE_CARD_FAILURE:
            return {
                ...state,
                error: action.payload,
                deletingcard: false
            };
        default:
            return state;
    }
}

export default reducer;