import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (credentials) => dispatch => {
    dispatch({ type: LOGIN_START});
    localStorage.removeItem("token");
    return axios
        .post(/*'link to server'*/ credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data, credentials: credentials});
        })
        .catch(err => {
            if (err.response.status === 403) {
                localStorage.removeItem("token");
            }
            dispatch({ type: LOGIN_FAILURE, payload: err.response.message });
        });
}

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const getCards = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
      .get("https://business-card-organizer.herokuapp.com/api/cards/"/*, {
        headers: { Authorization: localStorage.getItem("token") }
      }*/)
      .then(res => {
        dispatch({
          type: FETCH_DATA_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
      });
  };

  export const ADD_CARD_START = 'ADD_CARD_START';
  export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS';
  export const ADD_CARD_FAILURE = 'ADD_CARD_FAILURE';


  export const addCard = newCard => dispatch => {
    dispatch({ type: ADD_CARD_START });
    axios
      .post("https://business-card-organizer.herokuapp.com/api/cards/", newCard/*, {
        headers: { Authorization: localStorage.getItem("token") }
      }*/)
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

  export const DELETE_CARD_START = 'DELETE_CARD_START';
  export const DELETE_CARD_SUCCESS = 'DELETE_CARD_SUCCESS';
  export const DELETE_CARD_FAILURE = 'DELETE_CARD_FAILURE';

  export const deleteCard = id => dispatch => {
    dispatch({ type: DELETE_CARD_START });
    axios
      .delete(`https://business-card-organizer.herokuapp.com/api/cards/${id}`/*, id*/)
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