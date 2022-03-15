import axios from "axios";
const URL = 'https://hp-api.herokuapp.com/api/characters';
export async function getData(url,endpoint) {
  let response = await axios.get(`${url}${endpoint}`);
  return response.data;
}