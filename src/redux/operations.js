import axios from "axios";

export const authInstance = axios.create({
  baseURL: "https://car-rental-api.goit.global/",
});
