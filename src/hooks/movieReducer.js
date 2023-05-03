import { ACTION_TYPES } from "./movieActionTypes";

export const INITIAL_STATE = {
  loading: false,
  movies: [],
  error: false,
};

export const movieReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_MOVIES:
      return {
        loading: true,
        error: false,
        movies: [],
      };
    case ACTION_TYPES.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case ACTION_TYPES.FETCH_MOVIES_FAILURE:
      return {
        error: true,
        loading: false,
        movies: [],
      };
    default:
      return state;
  }
};
