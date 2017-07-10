import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import AppRouter from './src/Components/routes/Router';
import SaveDataExample from './src/Components/practice/SaveDataExample';
import HomePage from './src/Components/Home/HomePage';
export default class ReactNativeProject extends Component {
  render() {
    return (
      <SaveDataExample/>
    );
  }
}

AppRegistry.registerComponent('ReactNativeProject', () => ReactNativeProject);

