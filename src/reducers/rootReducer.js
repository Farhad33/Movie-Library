import { combineReducers } from 'redux';
import {
    popularReducer,
    topRatedReducer,
    nowPlayingReducer,
    upcomingReducer } from './movieReducer';
import genreReducer from './genreReducer';

const rootReducer = combineReducers({
    popular: popularReducer,
    topRated: topRatedReducer,
    nowPlaying: nowPlayingReducer,
    upcoming: upcomingReducer,
    genres: genreReducer
});

export default rootReducer;