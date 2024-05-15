import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-rocket-notes-w0hw.onrender.com"
})