import { makeGet } from '../utils/api';

export const GET_GENRES = 'GET_GENRES';

const getGenres = (genres) => ({
    type: GET_GENRES,
    genres
});

export const requestGenres = () => dispatch => {
    const query = `/genre/movie/list`;
    return makeGet(query)
    .then(genres => {
        dispatch(getGenres(genres));
    });
}