import { takeEvery } from "redux-saga/effects";
import { fetchPollsSaga, fetchPollDetailSaga, updateVotesSaga } from "./polls";
import { FETCH_POLLS, FETCH_POLL_DETAIL, UPDATE_VOTES } from "../actions/actionTypes";

export default function* watchPolls() {
  yield takeEvery(FETCH_POLLS, fetchPollsSaga);
  yield takeEvery(FETCH_POLL_DETAIL, fetchPollDetailSaga);
  yield takeEvery(UPDATE_VOTES, updateVotesSaga);
}
