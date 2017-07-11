import React, {Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon,Button,Container,Right,Header,Body,Left,Content,Title,Tabs,Tab} from 'native-base';
import {Navigator, StackNavigator, TabNavigator} from 'react-navigation'
import  fileName from './../JsonExample/fileName.json'
import {Actions} from 'react-native-router-flux'
import Book from './Book'
import Verse from './Verse'
import ListExample from './../listview/ListExample'

 const TabTogle = StackNavigator({
  Book: {
    screen: Book,
    params: {
    }
  },
  Verse: {
    screen: Verse,
  },
  },
  


  )

 const Root = TabNavigator({
  Book: {
    screen: TabTogle,
  },
},
{
  tabBarOptions : {
    style: {
      backgroundColor: '#3F51B5',
    }
  }
},
);



export default class HomePage extends Component {
  goToHome = () =>{
    Actions.home()
  }
  render() {
    return (
  <Container>
    <Root/>
  </Container>
  )
  }
}
  



