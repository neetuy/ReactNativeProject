import React, { Component } from 'react';
import { Container, Content, Tab, Tabs, Header, Picker,Body, Title, Left,Button, Icon,ListView} from 'native-base';
import {  View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Navigator, TabNavigator} from 'react-navigation'
import LanguageTab from './LanguageTab'
import VersionTab from './VersionTab' 

const LanguageTabNavigation = TabNavigator({

  LanguageTab: {
    screen: LanguageTab,
  },
  VersionTab: {
    screen: VersionTab,
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
export default class Language extends Component {
  goToHome = () => {
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
        Language and Version
      </Title>
    </Body>
  </Header>
    <LanguageTabNavigation/>
  </Container>
  )
  }
}
