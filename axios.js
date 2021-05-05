import axios from "axios";

const instance = axios.create({
    baseURL: "https://ohhsite.herokuapp.com",
});

export default instance;
