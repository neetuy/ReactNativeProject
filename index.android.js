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
import MyComponent from './src/Components/practice/MyComponent';
import SetPicture from './src/Components/practice/SetPicture';
import NotificationMessage from './src/Components/NotificationMessage/NotificationMessage';
import DatabaseExample from './src/Components/DatabaseExample/DatabaseExample';
import HomePage from './src/Components/Home/HomePage';


export default class ReactNativeProject extends Component {
  render() {
    return (
      <SetPicture/>
    );
  }
}


AppRegistry.registerComponent('ReactNativeProject', () => ReactNativeProject);

