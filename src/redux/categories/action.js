import {
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
  GET_SUBCATEGORIES_PENDING,
  GET_SUBCATEGORIES_SUCCESS,
  GET_SUBCATEGORIES_ERROR
} from './actionType';

export const getCategories = () => dispatch => {
  dispatch({
    type: GET_CATEGORIES_PENDING
  });
  return fetch('https://run.mocky.io/v3/61753b4b-fef7-4b9b-9bf8-38b9bcc7a520')
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: GET_CATEGORIES_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_CATEGORIES_ERROR,
        payload: err
      });
    });
};

export const getSubcategories = () => dispatch => {
  dispatch({
    type: GET_SUBCATEGORIES_PENDING
  });
  return fetch('https://run.mocky.io/v3/7ce099a1-0ca6-45b7-99cd-b3e76b7f1d32')
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: GET_SUBCATEGORIES_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_SUBCATEGORIES_ERROR,
        payload: err
      });
    });
};
