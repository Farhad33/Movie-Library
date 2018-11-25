import { GET_GENRES } from '../actions/genreActions';

const genreReducer = (state = [], action) => {
    switch (action.type) {
        case GET_GENRES:
            return action.genres.genres;
        default:
            return state;
    }
}

export default genreReducer;