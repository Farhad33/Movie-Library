import { makeGet } from '../utils/api';

export const GET_SEARCHED_MOVIES = 'GET_SEARCHED_MOVIES';

const getSearchedMovies = (movies) => ({
    type: GET_SEARCHED_MOVIES,
    movies
});

export const requestSearchedMovies = (searchValue) => dispatch => {
    const query1 = `/search/movie`;
    const query2 = `&query=${searchValue}`;
    return makeGet(query1, query2)
    .then(movies => {
        dispatch(getSearchedMovies(movies));
    });
}