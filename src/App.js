import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import { firebaseKey } from '../key';

class App extends Component {
  componentWillMount() {
    console.log(firebaseKey);
    firebase.initializeApp(firebaseKey);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An app</Text>
      </View>
    );
  }
}

export default App;
