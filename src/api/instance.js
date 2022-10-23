import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    tokenCybersoft : process.env.REACT_APP_TOKEN_CYBERSOFT,
    token: localStorage.getItem("token")
  },
  timeout: 10000,
});

//interceptors

instance.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    // Authorization: localStorage.getItem("token"),
  };
  return config;
});

export default instance;

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzIiLCJIZXRIYW5TdHJpbmciOiIxNC8wMi8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzYzMzI4MDAwMDAiLCJuYmYiOjE2NTAzODc2MDAsImV4cCI6MTY3NjQ4MDQwMH0.e3UrKdKqwFislz0cqribEEthuaW4HOuD4xwr1CTRQwg"
