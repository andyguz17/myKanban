import * as ActionTypes from '../ActionTypes';

const initialState = {
  isLoading: true,
  error: null,
  assignments: [],
};

export const Assignments = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOADING_ASSIGNMENTS:
      return {
        isLoading: true,
        error: null,
        assignments: [],
      };
    case ActionTypes.ADD_ASSIGNMENTS:
      return {
        isLoading: false,
        error: null,
        assignments: action.payload,
      };
    case ActionTypes.ASSIGNMENTS_FAILED:
      return {
        isLoading: false,
        error: action.payload,
        assignments: [],
      };
    default:
      return state;
  }
};
