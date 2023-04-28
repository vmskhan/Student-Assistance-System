import axios from "axios";

const proxyAxios=axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
});
export default proxyAxios;
