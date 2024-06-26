import axios from "axios";

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/'
})

export const get = async (url, options = {}) => {
    const res = await request.get(url, options)
    return res.data;
}
export default request