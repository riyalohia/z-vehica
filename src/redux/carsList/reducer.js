import {
  GET_CARS_PENDING,
  GET_CARS_SUCCESS,
  GET_CARS_ERROR,
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR
} from './actionType';

const initialState = {
  loading: false,
  cars: [],
  error: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS_PENDING:
      return {
        ...state,
        laoding: true
      };
    case GET_CARS_SUCCESS:
      return {
        ...state,
        loading: false,
        cars: action.payload.cars
      };

    case GET_CARS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.error
      };
    default:
      return state;
  }
};
