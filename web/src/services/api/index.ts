import axios from "axios";

export const InitialApi = axios.create({
  baseURL: "http://cdlp-back-end:4000",
});

export const defaultApi = axios.create({
  baseURL: "http://localhost:4000",
});
