import axios from "axios";
import { getEnv } from "../helpers/getEnv";

const { VITE_API_URL } = getEnv();
const jwtToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NTI2YzY5MjA0MGY2ZDEzY2M1MzdmMGYiLCJuYW1lIjoiVXNlclRlc3QwNSIsImlhdCI6MTY5NzA0MDA2MCwiZXhwIjoxNjk3MjEyODYwfQ._GZ67T_UF12V1Tx4dyb5NmZ30j-l-KMTaJX4OlEe28M";

const userApi = axios.create({
  baseURL: VITE_API_URL,
});
userApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-token": jwtToken,
  };
  return config;
});

export default userApi;
