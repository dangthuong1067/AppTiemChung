import axios from "axios";

const baseURL = 'https://tt-tc-api.webcore.vn/api'

export const api = {
    call: () => {
        return axios.create({ //tạo axios instance
            baseURL
        })
    }
}
