import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import { reduxFirestore, getFirestore, firestoreReducer, createFirestoreInstance } from 'redux-firestore'
import { reactReduxFirebase, getFirebase, firebaseReducer, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import authReducer from './store/reducers/authReducer'
import ratingReducer from './store/reducers/ratingReducer'

const fbConfig = {
    apiKey: "AIzaSyB-3dwHQL8PFdQzCElvUPv8b9PXRxwilh8",
    authDomain: "film-search-app.firebaseapp.com",
    databaseURL: "https://film-search-app.firebaseio.com",
    projectId: "film-search-app",
    storageBucket: "film-search-app.appspot.com",
    messagingSenderId: "739577206393",
    appId: "1:739577206393:web:39535ed1fea84645ac26a8",
    measurementId: "G-DTY3L2DM1T"
}
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

import App from './App'

import firebase from 'firebase/app'
import 'firebase/database';
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage';

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import './../styles/index.css'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

firebase.initializeApp(fbConfig)
firebase.firestore()

const rootReducer = combineReducers({ 
    auth: authReducer,
    rating: ratingReducer,
    firestore: firestoreReducer, 
    firebase: firebaseReducer 
})

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebase, rrfConfig)
    )
)

const app = (
    <Provider store={store}>
        <ReactReduxFirebaseProvider
            firebase={firebase}
            config={rrfConfig}
            dispatch={store.dispatch}
            createFirestoreInstance={createFirestoreInstance}
        >
            <HashRouter>
                <App/>
            </HashRouter>
        </ReactReduxFirebaseProvider>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));