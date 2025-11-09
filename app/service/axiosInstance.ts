import axios from "axios";

// ✅ Create base axios instance
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL||"http://localhost:3000/api", // 🔁 change to your backend base URL
    withCredentials: false, // set true if using cookies
    headers: {
        "Content-Type": "application/json",
    },
});

// ✅ Automatically attach JWT token (if available)
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token"); // token stored after login
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// ✅ Handle common errors globally
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.warn("🔒 Unauthorized! Redirecting to login...");
            // optionally clear token and redirect
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default api;
