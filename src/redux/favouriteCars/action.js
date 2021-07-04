import {
  UPDATE_FAVOURITE_CARS
} from './actionType';

export const updateFavouriteCars = (list) => dispatch => {
  dispatch({
    type: UPDATE_FAVOURITE_CARS,
    payload: list
  });
};
