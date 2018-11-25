import { makeGet } from '../utils/api';

export const GET_POPULAR = 'GET_POPULAR';
export const GET_NOW_PLAYING = 'GET_NOW_PLAYING';
export const GET_TOP_RATED = 'GET_TOP_RATED';
export const GET_UPCOMING = 'GET_UPCOMING';
export const GET_LATEST = 'GET_LATEST';

const getPopular = (movies) => ({
    type: GET_POPULAR,
    movies
});

const getNowPlaying = (movies) => ({
    type: GET_NOW_PLAYING,
    movies
});

const getTopRated = (movies) => ({
    type: GET_TOP_RATED,
    movies
});

const getUpcoming = (movies) => ({
    type: GET_UPCOMING,
    movies
});

const getLatest = (movies) => ({
    type: GET_LATEST,
    movies
});

export const requestPopular = () => dispatch => {
    const query = `/movie/popular`;
    return makeGet(query)
    .then(movies => {
        dispatch(getPopular(movies));
    });
}

export const requestNowPlaying = () => dispatch => {
    const query = `/movie/now_playing`;
    return makeGet(query)
    .then(movies => {
        dispatch(getNowPlaying(movies));
    });
}

export const request = () => dispatch => {
    const query = ``;
    return makeGet(query)
    .then(movies => {
        dispatch(get(movies));
    });
}

export const requestTopRated = () => dispatch => {
    const query = `/movie/top_rated`;
    return makeGet(query)
    .then(movies => {
        dispatch(getTopRated(movies));
    });
}

export const requestUpcoming = () => dispatch => {
    const query = `/movie/upcoming`;
    return makeGet(query)
    .then(movies => {
        dispatch(getUpcoming(movies));
    });
}

export const requestLatest = () => dispatch => {
    const query = `/movie/latest`;
    return makeGet(query)
    .then(movies => {
        dispatch(getLatest(movies));
    });
}