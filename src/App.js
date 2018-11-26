import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from './components/homepage/Homepage.jsx';
import MoviesGenre from './components/moviesGenre/MoviesGenre.jsx';
import Header from './components/common/Header.jsx';


const App = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/:genre" component={MoviesGenre} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
);


export default App;