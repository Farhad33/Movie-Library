import { combineReducers } from 'redux';
import {
    popularReducer,
    topRatedReducer,
    nowPlayingReducer,
    upcomingReducer } from './movieReducer';
import genreReducer from './genreReducer';
import moviesGenreReducer from './moviesGenreReducer';
import searchReducer from './searchReducer';
import movieDetailsReducer from './movieDetailsReducer';

const rootReducer = combineReducers({
    popular: popularReducer,
    topRated: topRatedReducer,
    nowPlaying: nowPlayingReducer,
    upcoming: upcomingReducer,
    genres: genreReducer,
    moviesGenre: moviesGenreReducer,
    searchedMovies: searchReducer,
    movieDetails: movieDetailsReducer
});

export default rootReducer;