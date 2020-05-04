import { FETCH_POLLS_SUCCESS, FETCH_POLLS_FAIL, FETCH_POLL_DETAIL_SUCCESS, FETCH_POLL_DETAIL_FAIL } from "../actions/actionTypes";

const initialState = {
  polls: [],
  loaded: false,
  error: false,
  poll: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POLLS_SUCCESS:
      return {
        ...state,
        loaded: true,
        polls: action.polls,
        error: false,
      };
    case FETCH_POLLS_FAIL:
      return {
        ...state,
        loaded: false,
        error: true,
      };
    case FETCH_POLL_DETAIL_SUCCESS:
      return {
        ...state,
        loaded: true,
        poll: action.poll,
        error: false,
      };
    case FETCH_POLL_DETAIL_FAIL:
      return {
        ...state,
        loaded: false,
        error: true,
      };
    default:
      return state;
  }
};
