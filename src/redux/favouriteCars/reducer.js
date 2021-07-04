import {
  UPDATE_FAVOURITE_CARS
} from './actionType';

const initialState = {
  favouriteCars: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FAVOURITE_CARS:
      return {
        ...state,
        favouriteCars: action.payload
      };
    default:
      return state;
  }
};
