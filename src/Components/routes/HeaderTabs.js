import React, { Component } from 'react';
import { Drawer, Container, Content, Tab, Tabs, Header, Picker,Body, Title, Right,Button, Icon} from 'native-base';
import {  View, Text, TouchableOpacity } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import DrawerExample from './DrawerExample';
import PickerExample from './PickerExample';


export default class HeaderTabs extends Component {
render() {
return (
  <Container>
    <Tabs>
        <Tab heading="Tab1">
          <DrawerExample/>
        </Tab>
        <Tab heading="Tab2">
          <PickerExample/>
        </Tab>
    </Tabs>
         
   
  </Container>
      );
  }
}
