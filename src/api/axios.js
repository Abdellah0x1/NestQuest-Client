import axios from "axios"

export default axios.create({
    baseURL: "http://localhost:3000/api/v1",
    withCredentials: true,
    headers: {
    "Content-Type": "application/json",
  },
})

// baseURL: "https://nestquest-backend-production.up.railway.app/api/v1",