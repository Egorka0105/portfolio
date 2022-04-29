import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {store} from './store/store';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import firebase from "firebase/compat/app";

firebase.initializeApp({
    apiKey: "AIzaSyDd-_zfrejkd3Ah0KogRe4JpuyCcQlCYJ8",
    authDomain: "portfolio-24ac4.firebaseapp.com",
    projectId: "portfolio-24ac4",
    storageBucket: "portfolio-24ac4.appspot.com",
    messagingSenderId: "26608650660",
    appId: "1:26608650660:web:5b9d0a47617e2de4979931",
    measurementId: "G-0NXZ5PKH6L"
})


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

