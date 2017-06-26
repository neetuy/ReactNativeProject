import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Routes from './src/Components/routes/Routes';
// import HomePage from './src/Components/Home/HomePage';
// import MenuExample from './src/Components/Home/MenuExample';
// import ListViewDemo from './src/Components/listview/ListViewDemo';
// import DrawerExample from './src/Components/routes/DrawerExample';

export default class ReactNativeProject extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

AppRegistry.registerComponent('ReactNativeProject', () => ReactNativeProject);


