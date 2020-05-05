import axios from "axios";

const API_URL = "https://polls.apiblueprint.org";

const fetchPolls = () => {
  return axios({
    method: "GET",
    url: `${API_URL}/questions`,
  });
};

const fetchPollDetail = id => {
  return axios({
    method: "GET",
    url: `${API_URL}/questions/${id}`,
  });
};

const updateVotes = choiceUrl => {
  return axios({
    method: "POST",
    url: `${API_URL}${choiceUrl}`,
  });
};

export default {
  fetchPolls,
  fetchPollDetail,
  updateVotes,
};
