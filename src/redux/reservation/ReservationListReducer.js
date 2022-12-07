/* It's setting the API URL. */
/* It's importing the axios library. */
import axios from 'axios';

const user = JSON.parse(localStorage.getItem('user'));
console.log(user);

const API_URL = `http://localhost:3000/api/v1/users/${user === null ? 1 : user.user.id}/reservations/`;
/* It's setting the initial state of the store. */
const FETCH_RESERVATIONS = 'FETCH_RESERVATIONS';
const FETCH_RESERVATIONS_SUCCESS = 'FETCH_RESERVATIONS_SUCCESS';
const FETCH_RESERVATIONS_FAILURE = 'FETCH_RESERVATIONS_FAILURE';

/* It's setting the initial state of the store. */
const initialState = {
  reservations: [],
};

/**
 * It returns an object with a type of FETCH_RESERVATIONS and a payload of the reservations array
 * @returns An object with a type and a payload.
 */
export const fetchReservationsAsync = (reservations) => ({
  type: FETCH_RESERVATIONS,
  payload: reservations,
});

/**
 * It returns an object with a type of FETCH_RESERVATIONS_SUCCESS and a payload of reservations
 * @param reservations - an array of reservation objects
 * @returns An object with a type and a payload.
 */
export const fetchReservationsSuccess = (reservations) => ({
  type: FETCH_RESERVATIONS_SUCCESS,
  payload: reservations,
});

/**
 * It returns an object with a type of FETCH_RESERVATIONS_FAILURE and a payload of the error
 * @param error - The error message that was returned from the API.
 * @returns An object with a type and a payload.
 */
export const fetchReservationsFailure = (error) => ({
  type: FETCH_RESERVATIONS_FAILURE,
  payload: error,
});

/**
 * We're using the axios library to make a GET request to our API, and then dispatching the fetchReservations action with
 * the response data
 * @returns An object with a type of FETCH_RESERVATIONS and a payload of the data from the API.
 */
/**
 * It's an asynchronous function that returns a promise
 */
export const fetchReservations = () => (dispatch) => {
  dispatch(fetchReservationsAsync());
  axios.get(API_URL)
    .then((response) => {
      const reservations = response.data;
      dispatch(fetchReservationsSuccess(reservations));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchReservationsFailure(errorMsg));
    });
};

/**
 * It takes in the current state and an action, and returns the next state
 * @param [state] - This is the current state of the store.
 * @param action - This is the action that was dispatched.
 * @returns The state is being returned.
 */

export const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESERVATIONS:
      return {
        ...state,
      };
    case FETCH_RESERVATIONS_SUCCESS:
      return {
        ...state,
        reservations: action.payload,
      };
    case FETCH_RESERVATIONS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
