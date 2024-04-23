import axios from 'axios'

const request = axios.create({
    baseURL: "http://localhost:4400/",
    withCredentials: true
})

export default request