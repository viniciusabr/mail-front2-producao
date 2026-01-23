// import axios from 'axios'

// console.log("Base da API:", import.meta.env.VITE_API_URL);

// const api = axios.create({
//     baseURL: 'http://localhost:3000'
// })


// export default api;



import axios from "axios";

const api = axios.create({
  baseURL: "https://independent-vibrancy-production.up.railway.app",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;

