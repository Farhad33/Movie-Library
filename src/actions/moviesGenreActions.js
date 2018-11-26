import { makeGet } from '../utils/api';

export const GET_GENRE_MOVIES = 'GET_GENRE_MOVIES';

const getGenreMovies = (movies) => ({
    type: GET_GENRE_MOVIES,
    movies
});

export const requestGenreMovies = (genreId) => dispatch => {
    const query = `/genre/${genreId}/movies`;
    return makeGet(query)
    .then(movies => {
        dispatch(getGenreMovies(movies));
    });
}