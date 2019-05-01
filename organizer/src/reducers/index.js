import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ADD_CARD_START,
  ADD_CARD_SUCCESS,
  ADD_CARD_FAILURE,
  DELETE_CARD_START,
  DELETE_CARD_SUCCESS,
  DELETE_CARD_FAILURE,
  UPDATE_CARD_START,
  UPDATE_CARD_UPDATED,
  UPDATE_CARD_FAILURE
} from "../actions";

const initialState = {
  cards: [],
  error: "",
  fetchData: false,
  credentials: [],
  updatingCard: false,
  loggingIn: false,
  storingCard: false,
  deletingCard: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        error: "",
        fetchData: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        cards: [...state.cards, action.payload],
        fetchData: false
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchData: false
      };
    case LOGIN_START:
      return {
        ...state,
        error: "",
        logginIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        logginIn: true,
        credentials: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        logginIn: false
      };

    case ADD_CARD_START:
      return {
        ...state,
        error: "",
        savingCard: true
      };
    case ADD_CARD_SUCCESS:
      return {
        ...state,
        savingCard: false,
        cards: action.payload
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
        error: "",
        deletingCard: true
      };
    case DELETE_CARD_SUCCESS:
      return {
        ...state,
        deletingCard: true,
        cards: action.payload
      };
    case DELETE_CARD_FAILURE:
      return {
        ...state,
        error: action.payload,
        deletingcard: false
      };
    case UPDATE_CARD_START:
      return {
        ...state,
        error: "",
        updatingCard: true
      };
    case UPDATE_CARD_UPDATED:
      return {
        ...state,
        error: "",
        cards: action.payload
      };
    case UPDATE_CARD_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingCard: false
      };

    default:
      return state;
  }
};

export default reducer;
