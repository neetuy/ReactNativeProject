import React, { Component } from 'react';
import { Container, Content, Tab, Tabs, Header, Picker,Body, Title, Left,Button, Icon} from 'native-base';
import {  View, Text, TouchableOpacity } from 'react-native';
import GridExample from  '../GridExample/GridExample'
import GridExample1 from  '../GridExample/GridExample1'
import { Actions } from 'react-native-router-flux';


export default class HeaderTabs extends Component {
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
        Books
      </Title>
    </Body>
  </Header>
  <Tabs>
      <Tab heading="chapter">
        <GridExample/>
      </Tab>
      <Tab heading="verse">
        <GridExample1/>
      </Tab>
  </Tabs>       
  </Container>
  )
  }
}
