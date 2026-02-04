import axios from "axios"

export default axios.create({
    baseURL: "https://nestquest-backend-production.up.railway.app/api/v1",
    withCredentials: true
})