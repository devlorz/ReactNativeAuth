import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { firebaseKey } from '../key';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    console.log(firebaseKey);
    firebase.initializeApp(firebaseKey);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
