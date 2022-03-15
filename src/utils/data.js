import axios from "axios";

export async function getData(ENDPOINT) {
  let response = await axios.get(`https://wizard-world-api.herokuapp.com/${ENDPOINT}`);
  return response.data;
}