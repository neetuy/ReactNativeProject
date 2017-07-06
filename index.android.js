import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import AppRouter from './src/Components/routes/Router';
import HomePage from './src/Components/Home/HomePage';
import Example from './src/Components/Home/Example';
import AppBody from './src/Components/JsonExample/AppBody'
export default class ReactNativeProject extends Component {
  render() {
    return (
      <AppRouter/>
    );
  }
}

AppRegistry.registerComponent('ReactNativeProject', () => ReactNativeProject);

