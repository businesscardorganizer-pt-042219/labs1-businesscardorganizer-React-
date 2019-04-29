import axios from "axios";

/* basic action types here */
export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
/* action creators here */

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("https://business-card-organizer.herokuapp.com/api/cards/")
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_DATA_FAILURE, payload: err }));
};

export const ADD_CARD_START = "ADD_CARD_START";
export const ADD_CARD_SUCCESS = "ADD_CARD_SUCCESS";
export const ADD_CARD_FAILURE = "ADD_CARD_FAILURE";

export const addCard = newCard => dispatch => {
  dispatch({ type: ADD_CARD_START });
  axios
    .post(
      "https://business-card-organizer.herokuapp.com/api/cards/",
      newCard /*, {
        headers: { Authorization: localStorage.getItem("token") }
      }*/
    )
    .then(res => {
      dispatch({
        type: ADD_CARD_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: ADD_CARD_FAILURE, payload: err.response });
    });
};

export const CARD_DATA_START = "CARD_DATA_START";
export const CARD_DATA_UPDATED = "CARD_DATA_SUCCESS";
export const CARD_DATA_FAILURE = "CARD_DATA_FAILURE";

export const cardData = id => {
  axios
    .put(`https://business-card-organizer.herokuapp.com/api/cards/${id}`, id)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export const DELETE_CARD_START = "DELETE_CARD_START";
export const DELETE_CARD_SUCCESS = "DELETE_CARD_SUCCESS";
export const DELETE_CARD_FAILURE = "DELETE_CARD_FAILURE";

export const deleteCard = id => dispatch => {
  dispatch({ type: DELETE_CARD_START });
  axios
    .delete(`https://business-card-organizer.herokuapp.com/api/cards/${id}`, id)
    .then(res => {
      dispatch({
        type: DELETE_CARD_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: DELETE_CARD_FAILURE, payload: err.response });
    });
};
