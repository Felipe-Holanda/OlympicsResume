import axios from "axios";

export const api = axios.create({
    baseURL: "https://kenzie-olympics.herokuapp.com",
});

export default api;