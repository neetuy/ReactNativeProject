import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RoutesPage from './src/Components/routes/Router';
import HomePage from './src/Components/Home/HomePage';
// import MenuExample from './src/Components/Home/MenuExample';
// import ListViewDemo from './src/Components/listview/ListViewDemo';
// import DrawerExample from './src/Components/routes/DrawerExample';

export default class ReactNativeProject extends Component {
  render() {
    return (
      <RoutesPage />
    );
  }
}

AppRegistry.registerComponent('ReactNativeProject', () => ReactNativeProject);


