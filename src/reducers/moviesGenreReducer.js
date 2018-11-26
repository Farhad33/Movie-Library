import { GET_GENRE_MOVIES } from '../actions/moviesGenreActions';

const moviesGenreReducer = (state = [], action) => {
    switch (action.type) {
        case GET_GENRE_MOVIES:
            return action.movies.results;
        default:
            return state;
    }
}

export default moviesGenreReducer;