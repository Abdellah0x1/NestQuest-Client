import axios from "axios"

export default axios.create({
    baseURL: "nestquest-backend-production.up.railway.app/api/v1",
    withCredentials: true
})