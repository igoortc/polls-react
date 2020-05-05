import { FETCH_POLLS, FETCH_POLL_DETAIL, UPDATE_VOTES, NEW_POLL } from "./actionTypes";

export const fetchPolls = () => ({
  type: FETCH_POLLS,
});

export const fetchPollDetail = id => ({
  type: FETCH_POLL_DETAIL,
  id,
});

export const updateVotes = choiceUrl => ({
  type: UPDATE_VOTES,
  choiceUrl,
});

export const newPoll = poll => ({
  type: NEW_POLL,
  poll,
})