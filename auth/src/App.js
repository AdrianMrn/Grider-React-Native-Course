import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    constructor() {
        super();
        firebase.initializeApp({
            apiKey: 'AIzaSyCbd5rytm9VnAf3uvwgihHFpbKJklTj8VY',
            authDomain: 'grider-authentication.firebaseapp.com',
            databaseURL: 'https://grider-authentication.firebaseio.com',
            projectId: 'grider-authentication',
            storageBucket: 'grider-authentication.appspot.com',
            messagingSenderId: '127516780165'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    state = { loggedIn: null };

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner />;
        }
    }

    render() {
        return (
            <View style={{ minHeight: 100 }}>
                <Header headerText="Auth" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
