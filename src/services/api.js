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

export default api;
