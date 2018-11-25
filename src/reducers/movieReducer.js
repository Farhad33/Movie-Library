import {
    GET_POPULAR,
    GET_NOW_PLAYING,
    GET_TOP_RATED,
    GET_UPCOMING,
    GET_LATEST
} from '../actions/movieActions';

// export const movieReducer = (state = {}, action) => {
//     switch (action.type) {
//         case GET_POPULAR:
//             const popular = merge(state, {popular: action.movies.results})
//             return popular;
//         case GET_NOW_PLAYING:
//             const nowPlaying = merge(state, {nowPlaying: action.movies.results})
//         return nowPlaying;
//         case GET_TOP_RATED:
//             const topRated = merge(state, {topRated: action.movies.results})
//             return topRated;
//         case GET_UPCOMING:
//             const upcoming = merge(state, {upcoming: action.movies.results})
//             return upcoming;
//         default:
//             return state;
//     }
// }

export const popularReducer = (state = [], action) => {
    switch (action.type) {
        case GET_POPULAR:
            return action.movies.results;
        default:
            return state;
    }
}

export const topRatedReducer = (state = [], action) => {
    switch (action.type) {
        case GET_TOP_RATED:
            return action.movies.results;
        default:
            return state;
    }
}

export const nowPlayingReducer = (state = [], action) => {
    switch (action.type) {
        case GET_NOW_PLAYING:
            return action.movies.results;
        default:
            return state;
    }
}

export const upcomingReducer = (state = [], action) => {
    switch (action.type) {
        case GET_UPCOMING:
            return action.movies.results;
        default:
            return state;
    }
}