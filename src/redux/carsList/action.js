import {
  GET_CARS_PENDING,
  GET_CARS_SUCCESS,
  GET_CARS_ERROR,
} from './actionType';

export const getCars = () => dispatch => {
  dispatch({
    type: GET_CARS_PENDING
  });
  return fetch('https://run.mocky.io/v3/7ce099a1-0ca6-45b7-99cd-b3e76b7f1d32')
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: GET_CARS_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_CARS_ERROR,
        payload: err
      });
    });
};
