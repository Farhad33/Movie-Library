import axios from 'axios';
const apiKey = '?api_key=7df716a129c2b817e203d9af8e29f9e0&language=en-US';
const baseURL = 'https://api.themoviedb.org/3';

export const makeGet = (query) => {
    const URL = baseURL + query + apiKey;
    return axios.get(URL)
    .then(res => res.data)
    .catch(console.log)
}