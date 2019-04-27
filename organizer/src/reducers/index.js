import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "../actions";

const initialState = {
  data: null,
  error: "",
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: ""
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    default:
      return state;
  }
};

export default reducer;
