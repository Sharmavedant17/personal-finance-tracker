import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5003" });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("user_info")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("user_info")).token
//     }`;
//   }

//   return req;
// });

export const logIn = (data) => API.post("/app/login", data);

export const signUp = (data) => API.post("/app/signup", data);