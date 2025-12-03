import axios from "axios";

// Create Axios instance
export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1`,
  // withCredentials: true, // If you're using cookies
  headers: {
    "Content-Type": "application/json",
  },
});
