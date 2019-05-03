import { 
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    FETCH_EVENTS_START,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAILURE,
    GET_CARD_BY_ID_START,
    GET_CARD_BY_ID_SUCCESS,
    GET_CARD_BY_ID_FAILURE,
    GET_USERS_CARD_START,
    GET_USERS_CARD_SUCCESS,
    GET_USERS_CARD_FAILURE,
    GET_CARDS_BY_EVENT_ID_START,
    GET_CARDS_BY_EVENT_ID_SUCCESS,
    GET_CARDS_BY_EVENT_ID_FAILURE,
    ADD_CARD_START,
    ADD_CARD_SUCCESS,
    ADD_CARD_FAILURE,
    ADD_EVENT_START,
    ADD_EVENT_SUCCESS,
    ADD_EVENT_FAILURE,
    DELETE_CARD_START,
    DELETE_CARD_SUCCESS,
    DELETE_CARD_FAILURE,
    EDIT_CARD_START,
    EDIT_CARD_SUCCESS,
    EDIT_CARD_FAILURE
} from '../actions';

const initialState = {
    cards: [],
    cardById: [],
    usersCard: [],
    events: [],
    isLoggingIn: false,
    isSigningIn: false,
    credentials: [],
    fetchingCards: false,
    fetchingEvents: false,
    savingCard: false,
    savingEvent: false,
    deletingCard: false,
    updatingCard: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START: {
            return {
                ...state,
                isSigningIn: true
            };
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                isSigningIn: false,
                credentials: action.credentials
            };
        }
        case REGISTER_FAILURE: {
            return {
                ...state,
                isSigningIn: false
            };
        }
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
            case FETCH_EVENTS_START:
            return {
                ...state,
                error: '',
                fetchingEvents: true
            };
        case FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                error: '',
                fetchingEvents: false,
                events: action.payload
            };
        case FETCH_EVENTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchingEvents: false
            };
        case GET_CARD_BY_ID_START:
            return {
                ...state,
                error: '',
                fetchingCards: true,
                cardById: []
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
        case GET_USERS_CARD_START:
            return {
                ...state,
                error: '',
                fetchingCards: true
            };
        case GET_USERS_CARD_SUCCESS:
            return {
                ...state,
                error: '',
                fetchingCards: false,
                usersCard: action.payload
            };
        case GET_USERS_CARD_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchingCards: false
            };

        case GET_CARDS_BY_EVENT_ID_START:
            return {
                ...state,
                error: '',
                fetchingCards: true,
                cards: []
            };
        case GET_CARDS_BY_EVENT_ID_SUCCESS:
            return {
                ...state,
                error: '',
                fetchingCards: false,
                cards: action.payload
            };
        case GET_CARDS_BY_EVENT_ID_FAILURE:
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
            case ADD_EVENT_START:
            return {
                ...state,
                error: '',
                savingEvent: true,
            }
        case ADD_EVENT_SUCCESS:
            return {
                ...state,
                savingEvent: false,
                events: [...state.events, action.payload]
            };
        case ADD_EVENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                savingEvent: false
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
        case EDIT_CARD_START:
            return {
                ...state,
                error: '',
                updatingCard: true,
            }
        case EDIT_CARD_SUCCESS:
            return {
              ...state,
              updatingCard: false,
              cards: state.cards.filter(card => {
                  if(card.id === action.payload.id) {
                      return action.payload
                  } else {
                      return card
                  }
              })
            }
        case EDIT_CARD_FAILURE:
            return {
              ...state,
              error: action.payload,
              updatingCard: false
            };
        default:
            return state;
    }
}

export default reducer;