import { GET_POPULAR } from '../actions/movieActions';

const movieReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_POPULAR:
            return { popular: action.movies.results };
        default:
            return state;
    }
}

export default movieReducer;