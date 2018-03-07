import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';

import Router from './Router';

class App extends Component {
    constructor() {
        super();

        const config = {
            apiKey: 'AIzaSyC6LmM3SgssuXo_4h--pkqgwEk2gmpPc0Y',
            authDomain: 'grider-manager-46b4b.firebaseapp.com',
            databaseURL: 'https://grider-manager-46b4b.firebaseio.com',
            projectId: 'grider-manager-46b4b',
            storageBucket: 'grider-manager-46b4b.appspot.com',
            messagingSenderId: '324957743479'
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
