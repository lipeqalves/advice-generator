import axios from "axios";

const api = axios.create(
    {
        baseURL:'https://api.adviceslip.com/advice',
    }
)
export default api;
