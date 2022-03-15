import axios from "axios";

export async function getData(START, ENDPOINT) {
  let response = await axios.get(`https://${START}-api.herokuapp.com/${ENDPOINT}`);
  return response.data;
}

