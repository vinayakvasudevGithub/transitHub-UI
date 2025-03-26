import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7I…4MTh9.JZMzn356vHGN19eBiC8i9nwh4kUHCN5wA-7NLDjeSzM'`,
  },
});

export default axiosInstance;
