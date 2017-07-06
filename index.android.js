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
export default class ReactNativeProject extends Component {
  render() {
    return (
      <AppRouter/>
    );
  }
}

AppRegistry.registerComponent('ReactNativeProject', () => ReactNativeProject);

