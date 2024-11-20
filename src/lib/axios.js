import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:1337/", // Set the base URL here
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
