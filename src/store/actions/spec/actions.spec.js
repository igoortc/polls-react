import { fetchPolls, fetchPollDetail } from "../polls";
import { updateVotes } from "../choices";

describe("Poll actions", () => {
  it("should dispatch FETCH_POLLS action", () => {
    expect(fetchPolls()).toEqual({ type: "FETCH_POLLS" });
  });

  it("should dispatch FETCH_POLL_DETAIL action", () => {
    expect(fetchPollDetail()).toEqual({ type: "FETCH_POLL_DETAIL" });
  });

  it("should dispatch UPDATE_VOTES action", () => {
    expect(updateVotes()).toEqual({ type: "UPDATE_VOTES" });
  });
});
