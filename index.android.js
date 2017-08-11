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
import GoogleMapsExample from './src/Components/practice/GoogleMapsExample';
import SetPicture from './src/Components/practice/SetPicture';
import MusicPlay from './src/Components/practice/MusicPlay';
import FetchURLData from './src/Components/practice/FetchURLData';
import ListViewCustom from './src/Components/practice/ListViewCustom';
// import NotificationMessage from './src/Components/NotificationMessage/NotificationMessage';
import DatabaseExample from './src/Components/DatabaseExample/DatabaseExample';
import HomePage from './src/Components/Home/HomePage';
import DataUrl from './src/Components/practice/DataUrl';
import MapDirections from './src/Components/practice/MapDirections'
import GestureExample from './src/Components/practice/GestureExample'
import GridViewImage from './src/Components/practice/GridViewImage'
import Form from './src/Components/Form/Form';
import AnimationExample from './src/Components/practice/AnimationExample'
import AnimationExample2 from './src/Components/practice/AnimationExample2';
import ShareMessageExample from './src/Components/practice/ShareMessageExample'

export default class ReactNativeProject extends Component {
  render() {
    return (
      <GridViewImage/>
    );
  }
}


AppRegistry.registerComponent('ReactNativeProject', () => ReactNativeProject);

