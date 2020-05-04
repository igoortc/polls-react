import { fetchPolls, fetchPollDetail } from "../polls";

describe("Poll actions", () => {
  it("should dispatch FETCH_POLLS action", () => {
    expect(fetchPolls()).toEqual({ type: "FETCH_POLLS" });
  });

  it("should dispatch FETCH_POLL_DETAIL action", () => {
    expect(fetchPollDetail()).toEqual({ type: "FETCH_POLL_DETAIL" });
  });
});
