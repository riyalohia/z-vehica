import {
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR
} from './actionType';

const initialState = {
  categories: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_PENDING:
      return {
        ...state,
        loading: true
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: [{ id: 0, label: 'all' }, ...action.payload.categories]
      };

    case GET_CATEGORIES_ERROR:
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
