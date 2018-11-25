import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.sass';
import configureStore from './store/store';


const store = configureStore();
const root = document.getElementById('root');
ReactDOM.render(<App store={store} />, root);
