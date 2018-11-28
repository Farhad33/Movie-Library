import { GET_SEARCHED_MOVIES } from '../actions/searchActions';

const searchReducer = (state = [], action) => {
    switch (action.type) {
        case GET_SEARCHED_MOVIES:
            return action.movies.results;
        default:
            return state;
    }
}

export default searchReducer;