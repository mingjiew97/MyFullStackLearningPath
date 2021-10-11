import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import rootReducers from "./reducers";
import reduxThunk from 'redux-thunk';
import axios from "axios";
import jwtDecode from "jwt-decode";

const initialState = {};
// load user from localstorage if present
const token = localStorage.getItem('token');
if (token !== null) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  initialState.auth = jwtDecode(token).user;
}
const store = createStore(rootReducers, initialState, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
