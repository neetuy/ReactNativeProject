import React, {Component} from 'react'
import { Router, Scene,  Schema, Animations, Actions } from 'react-native-router-flux'
import {TouchableOpacity, Text,View, AsyncStorage} from 'react-native';

import Home from '../Home/HomePage'
import MenuExample from '../Home/MenuExample'
import Login from '../Login/Login'
import HeaderTabs from './HeaderTabs'
import styles from '../../style/style';


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
    <Scene key = "home"  component = {Home} title = "Home" hideNavBar={true} initial={true} />
    <Scene key = "headerTabs" component = {HeaderTabs} title= "HeaderTabs"/>
  </Scene>
);
     