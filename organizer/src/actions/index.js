import axios from "axios";


/* REGISTER */
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = (credentials) => dispatch => {
  dispatch({ type: REGISTER_START});
  localStorage.removeItem("token");
  return axios
        .post("https://business-card-organizer.herokuapp.com/api/auth/register", credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data, credentials: credentials});
        })
        .catch(err => {
            if (err.response.status === 403) {
                localStorage.removeItem("token");
            }
            dispatch({ type: REGISTER_FAILURE, payload: err.response.message });
        });
}

/* LOGIN */
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (credentials) => dispatch => {
    dispatch({ type: LOGIN_START});
    localStorage.removeItem("token");
    return axios
        .post("https://business-card-organizer.herokuapp.com/api/auth/login", credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data, credentials: credentials});
        })
        .catch(err => {
            console.log(`ERROR LOGIN: ${err.message}`);
            if (err.response.status === 403) {
                localStorage.removeItem("token");
            }
            dispatch({ type: LOGIN_FAILURE, payload: err });
        });
}

// GET all cards
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const getCards = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("https://business-card-organizer.herokuapp.com/api/users/cards", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      return dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
    });
};

//  GET card by id from user's collection of saved cards
export const GET_CARD_BY_ID_START = "GET_CARD_BY_ID_START";
export const GET_CARD_BY_ID_SUCCESS = "GET_CARD_BY_ID_SUCCESS";
export const GET_CARD_BY_ID_FAILURE = "GET_CARD_BY_ID_FAILURE";

export const getCardById = (id) => dispatch => {
  dispatch({ type: GET_CARD_BY_ID_START });
  axios
    .get(`https://business-card-organizer.herokuapp.com/api/users/cards/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      return dispatch({
        type: GET_CARD_BY_ID_SUCCESS,
        payload: res.data[0]
      });
    })
    .catch(err => {
      dispatch({ type: GET_CARD_BY_ID_FAILURE, payload: err.response });
    });
};

// GET cards which user created himself to share
export const GET_USERS_CARD_START = "GET_USERS_CARD_START";
export const GET_USERS_CARD_SUCCESS = "GET_USERS_CARD_SUCCESS";
export const GET_USERS_CARD_FAILURE = "GET_USERS_CARD_FAILURE";

export const getUsersCard = (id) => dispatch => {
  dispatch({ type: GET_USERS_CARD_START });
  axios
    .get(`https://business-card-organizer.herokuapp.com/api/users/usersowncard/${id}`, id, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      return dispatch({
        type: GET_USERS_CARD_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: GET_USERS_CARD_FAILURE, payload: err.response });
    });
};

// GET all events
export const FETCH_EVENTS_START = "FETCH_EVENTS_START";
export const FETCH_EVENTS_SUCCESS = "FETCH_EVENTS_SUCCESS";
export const FETCH_EVENTS_FAILURE = "FETCH_EVENTS_FAILURE";

export const getEvents = () => dispatch => {
  dispatch({ type: FETCH_EVENTS_START });
  axios
    .get("https://business-card-organizer.herokuapp.com/api/users/events", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      return dispatch({
        type: FETCH_EVENTS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: FETCH_EVENTS_FAILURE, payload: err.response });
    });
};
// GET cards by event id
export const GET_CARDS_BY_EVENT_ID_START = "GET_CARDS_BY_EVENT_ID_START";
export const GET_CARDS_BY_EVENT_ID_SUCCESS = "GET_CARDS_BY_EVENT_ID_SUCCESS";
export const GET_CARDS_BY_EVENT_ID_FAILURE = "GET_CARDS_BY_EVENT_ID_FAILURE";

export const getCardsByEvent = id => dispatch => {
  dispatch({ type: GET_CARDS_BY_EVENT_ID_START });
  axios
    .get(`https://business-card-organizer.herokuapp.com/api/users/events/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      return dispatch({
        type: GET_CARDS_BY_EVENT_ID_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: GET_CARDS_BY_EVENT_ID_FAILURE, payload: err.response });
    });
}


// ADD card
export const ADD_CARD_START = 'ADD_CARD_START';
export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS';
export const ADD_CARD_FAILURE = 'ADD_CARD_FAILURE';


export const addCard = newCard => dispatch => {
  dispatch({ type: ADD_CARD_START });
  axios
    .post("https://business-card-organizer.herokuapp.com/api/users/cards", newCard, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: ADD_CARD_SUCCESS,
        payload: {
          id: res.data[0],
          ...newCard
        }
      });
    })
    .catch(err => {
      dispatch({ type: ADD_CARD_FAILURE, payload: err.response });
    });
};

// ADD event
export const ADD_EVENT_START = 'ADD_EVENT_START';
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const ADD_EVENT_FAILURE = 'ADD_EVENT_FAILURE';


export const addEvent = newEvent => dispatch => {
  dispatch({ type: ADD_EVENT_START });
  axios
    .post("https://business-card-organizer.herokuapp.com/api/users/events", newEvent, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: ADD_EVENT_SUCCESS,
        payload: {
          id: res.data[0],
          ...newEvent
        }
      });
    })
    .catch(err => {
      dispatch({ type: ADD_EVENT_FAILURE, payload: err.response });
    });
};

// DELETE card
export const DELETE_CARD_START = 'DELETE_CARD_START';
export const DELETE_CARD_SUCCESS = 'DELETE_CARD_SUCCESS';
export const DELETE_CARD_FAILURE = 'DELETE_CARD_FAILURE';

export const deleteCard = id => dispatch => {
  dispatch({ type: DELETE_CARD_START });
  axios
    .delete(`https://business-card-organizer.herokuapp.com/api/users/cards/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then((res) => {
      return dispatch({
        type: DELETE_CARD_SUCCESS,
        payload: id
      });
    })
    .catch(err => {
      dispatch({ type: DELETE_CARD_FAILURE, payload: err.response });
    });
};

// EDIT card
export const EDIT_CARD_START = 'EDIT_CARD_START';
export const EDIT_CARD_SUCCESS = 'EDIT_CARD_SUCCESS';
export const EDIT_CARD_FAILURE = 'EDIT_CARD_FAILURE';

export const editCard = (id, updatedCard) => dispatch => {
  dispatch({ type: EDIT_CARD_START });
  axios
    .put(`https://business-card-organizer.herokuapp.com/api/users/cards/${id}`, updatedCard, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({
        type: EDIT_CARD_SUCCESS,
        payload: {id: id, ...updatedCard}
      });
    })
    .catch(err => {
      dispatch({ type: EDIT_CARD_FAILURE, payload: err.response });
    });
};