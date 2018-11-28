import { GET_MOVIE_DETAILS } from '../actions/movieActions';

const movieDetailsReducer = (state = [], action) => {
    switch (action.type) {
        case GET_MOVIE_DETAILS:
            return action.movie;
        default:
            return state;
    }
}

export default movieDetailsReducer;