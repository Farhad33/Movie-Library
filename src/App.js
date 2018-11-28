import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from './components/homepage/Homepage.jsx';
import MoviesGenre from './components/moviesGenre/MoviesGenre.jsx';
import Header from './components/common/Header.jsx';
import SearchedMovies from './components/searchedMovies/SearchedMovies.jsx';
import MovieDetails from './components/common/MovieDetails.jsx';


const App = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/genre/:genre" component={MoviesGenre} />
                    <Route exact path="/search/:search" component={SearchedMovies} />
                    <Route exact path="/movie/:movie" component={MovieDetails} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
);


export default App;