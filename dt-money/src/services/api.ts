import axios from "axios";

export const api = axios.create({
  baseURL: "https://epic-shannon-17e1b6.netlify.app/api",
});
