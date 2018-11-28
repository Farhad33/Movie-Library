import axios from 'axios';
const apiKey = '?api_key=7df716a129c2b817e203d9af8e29f9e0';
const baseURL = 'https://api.themoviedb.org/3';
const optionals = '&language=en-US&page=1&include_adult=true';

export const makeGet = (query1='', query2='') => {
    const URL = baseURL + query1 + apiKey + optionals + query2;
    return axios.get(URL)
    .then(res => res.data)
    .catch(console.log)
}