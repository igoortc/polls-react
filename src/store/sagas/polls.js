import { put } from "redux-saga/effects";
import {
  FETCH_POLLS_SUCCESS,
  FETCH_POLLS_FAIL,
  FETCH_POLL_DETAIL_SUCCESS,
  FETCH_POLL_DETAIL_FAIL,
  UPDATE_VOTES_SUCCESS,
  UPDATE_VOTES_FAIL,
} from "../actions/actionTypes";
import api from "../../utils/requests/api";

export function* fetchPollsSaga(action) {
  try {
    const response = yield api.fetchPolls();
    const polls = yield response.data;
    polls.length > 0
      ? yield put({ type: FETCH_POLLS_SUCCESS, polls })
      : yield put({ type: FETCH_POLLS_FAIL });
  } catch (error) {
    yield put({ type: FETCH_POLLS_FAIL, message: error.message });
  }
}

export function* fetchPollDetailSaga(action) {
  try {
    console.log('addddd', action.id)
    const response = yield api.fetchPollDetail(action.id);
    const poll = yield response.data;
    yield put({ type: FETCH_POLL_DETAIL_SUCCESS, poll });
  } catch (error) {
    yield put({ type: FETCH_POLL_DETAIL_FAIL, message: error.message });
  }
}

export function* updateVotesSaga(action) {
  try {
    console.log('aaaaction', action.choiceUrl)
    const response = yield api.updateVotes(action.choiceUrl);
    const vote = yield response.data;
    yield put({ type: UPDATE_VOTES_SUCCESS, vote });
  } catch (error) {
    yield put({ type: UPDATE_VOTES_FAIL, message: error.message });
  }
}
