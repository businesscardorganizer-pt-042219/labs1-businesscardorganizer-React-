import axios from "axios";

/* basic action types here */
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
/* action creators here */

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("https://business-card-organizer.herokuapp.com/api/cards/")
    .then(res => dispatch({ type: FETCH_DATA_SUCCESS, PAYLOAD: res.data }))
    .catch(err => dispatch({ type: FETCH_DATA_FAILURE, payload: err }));
};
