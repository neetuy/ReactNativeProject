import React, {Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon,Button,Container,Right,Header,Body,Left,Content,Title,Tabs,Tab} from 'native-base';
import {Navigator, TabNavigator} from 'react-navigation'
import  fileName from './../JsonExample/fileName.json'
import {Actions} from 'react-native-router-flux'
import MainScreen from './MainScreen'
import SetupScreen from './SetupScreen'
import ListExample from './../listview/ListExample'

 const TabTogle = TabNavigator({

  MainScreen: {
    screen: MainScreen,
  },
  SetupScreen: {
    screen: SetupScreen,
  },
  },
  {
  tabBarOptions : {
    style: {
      backgroundColor: '#3F51B5',
    }
  }
}
  )


export default class HomePage extends Component {

  goToHome = () =>{
    Actions.home()
  }
  render() {
    return (
  <Container>
  <Header>
    <Left>
    <TouchableOpacity  onPress = {this.goToHome}>
      <Icon name="ios-arrow-back" style={{color:'#fff'}}/>
    </TouchableOpacity>
    </Left>
    <Body>
      <Title>
        Books
      </Title>
    </Body>
  </Header>
    <TabTogle/>
  </Container>
  )
  }
}
  



