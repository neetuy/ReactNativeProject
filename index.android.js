import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import RoutesPage from './src/Components/routes/Router';
import HomePage from './src/Components/Home/HomePage';
import AppBody from './src/Components/JsonExample/AppBody'
export default class ReactNativeProject extends Component {
  render() {
    return (
      <RoutesPage/>
    );
  }
}

AppRegistry.registerComponent('ReactNativeProject', () => ReactNativeProject);

