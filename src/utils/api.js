import axios from "axios";

const API_URL = "https://polls.apiblueprint.org/questions";

const fetchPolls = () => {
  return axios({
    method: "GET",
    url: API_URL,
  });
};

const fetchPollDetail = id => {
  return axios({
    method: "GET",
    url: `${API_URL}/${id}`,
  });
};

export default {
  fetchPolls,
  fetchPollDetail,
};
