import { FETCH_POLLS, FETCH_POLL_DETAIL } from "./actionTypes";

export const fetchPolls = () => ({
  type: FETCH_POLLS,
});

export const fetchPollDetail = id => ({
  type: FETCH_POLL_DETAIL,
  id,
});
