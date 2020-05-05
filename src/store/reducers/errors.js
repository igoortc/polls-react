import { FETCH_POLLS_FAIL, FETCH_POLL_DETAIL_FAIL, UPDATE_VOTES_FAIL, NEW_POLL_FAIL } from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POLLS_FAIL:
      return { message: action.message };
    case FETCH_POLL_DETAIL_FAIL:
      return { message: action.message };
    case UPDATE_VOTES_FAIL:
      return { message: action.message };
    case NEW_POLL_FAIL:
      return { message: action.message };
    default:
      return state;
  }
};
