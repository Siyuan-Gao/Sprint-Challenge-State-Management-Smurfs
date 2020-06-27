import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
} from "../actions/action";

const initialState = {
  character: [],
  error: "",
  isFetching: false,
};

export const rootReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isFetching: true,
        character: [],
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        character: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
