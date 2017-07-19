import React, {Component} from 'react'
import { Router, Scene,  Schema, Animations, Actions } from 'react-native-router-flux'
import {TouchableOpacity, Text,View, AsyncStorage} from 'react-native';
import HomePage from '../Home/HomePage'
import HeaderTabs from '../Home/HeaderTabs'
import Login from '../Login/Login'
import styles from '../../style/style';
import GridExample from '../GridExample/GridExample'
import GridExample1 from '../GridExample/GridExample1'
import Language from '../Language/Language'
import CameraExample from '../Camera/CameraExample'
import {StackNavigator, TabNavigator} from 'react-navigation';

// const Main = StackNavigator({
//   App: {
//     screen: App,
//   },
//   Test: {
//     screen: Test,
//   },
// })


// const Root = TabNavigator({
//   Main1: {
//     screen: Main,
//   },
//   Main2: {
//     screen: Main,
//   },
// });
// export default const RouterApp = StackNavigator({
//   Root:{
//     screen:Root,
//   },
//   Home: {
//     screen:HomePage,
//   },
//   headerTabs: {
//     screen: HeaderTabs,
//   },
//   language:{
//     screen:Language,
//   },
//   gridOne:{
//     screen:GridExample
//   },
//   gridExample:{
//     gridExample:GridExample1,
//   },

// })


export default class RoutesPage extends Component {
   componentDidMount() {
      Actions.home();
    }
      render() {
          return (
              <Router scenes={scenes} />  
              )
      }
  }

const scenes = Actions.create(
  <Scene key="root" >
    <Scene key = "login" component = {Login}  title = "Login"/>
    <Scene key = "home"  component = {HomePage} title = "Home" hideNavBar={true} initial={true} />
    <Scene key = "headerTabs" component = {HeaderTabs} title= "HeaderTabs"/>
    <Scene key = "gridOne" component = {GridExample1} />
    <Scene key = "gridExample" component = {GridExample}/>
    <Scene key = "language" component = {Language}/>
    <Scene key = "camera" component = {CameraExample}/>
  </Scene>
);
     