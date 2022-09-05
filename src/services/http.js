import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_AXIOS_URL

export const get = (url, config = {}) => {
    return axios.get(url, config)
}
export const post = (url, payload, config) => {
    return axios.post(url, payload, config).then(response => response.data)
}
export const del = (url, config = {}) => {
    return axios.delete(url, config)
}
export const put = (url, payload, config) => {
    return axios.put(url, payload, config)
}