import {
  FETCH_POLLS_SUCCESS,
  FETCH_POLLS_FAIL,
  FETCH_POLL_DETAIL_SUCCESS,
  FETCH_POLL_DETAIL_FAIL,
  UPDATE_VOTES_SUCCESS,
  UPDATE_VOTES_FAIL,
  NEW_POLL_SUCCESS,
  NEW_POLL_FAIL,
} from "../actions/actionTypes";

const initialState = {
  polls: [],
  loaded: false,
  error: false,
  poll: {},
  vote: null,
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
    case UPDATE_VOTES_SUCCESS:
      return {
        ...state,
        loaded: true,
        vote: action.vote,
        error: false,
      };
    case UPDATE_VOTES_FAIL:
      return {
        ...state,
        loaded: false,
        error: true,
      };
    case NEW_POLL_SUCCESS:
      return {
        ...state,
        loaded: true,
        poll: action.poll,
        error: false,
      };
    case NEW_POLL_FAIL:
      return {
        ...state,
        loaded: false,
        error: true,
      };
    default:
      return state;
  }
};
