import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY || "";

export default axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${apiKey}&`,
  responseType: "json"
});