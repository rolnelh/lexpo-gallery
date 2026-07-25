import axios from "axios";

// 1. Création d'une instance Axios pré-configurée
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // L'adresse de ton API Laravel
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// 2. Intercepteur : Injecte automatiquement le Token s'il existe dans localStorage
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
