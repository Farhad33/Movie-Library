import { combineReducers } from 'redux';
import {
    popularReducer,
    topRatedReducer,
    nowPlayingReducer,
    upcomingReducer } from './movieReducer';
import genreReducer from './genreReducer';
import moviesGenreReducer from './moviesGenreReducer';

const rootReducer = combineReducers({
    popular: popularReducer,
    topRated: topRatedReducer,
    nowPlaying: nowPlayingReducer,
    upcoming: upcomingReducer,
    genres: genreReducer,
    moviesGenre: moviesGenreReducer
});

export default rootReducer;