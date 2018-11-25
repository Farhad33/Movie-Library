import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from './components/homepage/Homepage.jsx';
const HomePage = () => (
    <div>Home Page</div>
);

const App = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Homepage} />
            </Switch>
        </BrowserRouter>
    </Provider>
);


export default App;