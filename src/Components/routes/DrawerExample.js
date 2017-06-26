import React, { Component } from 'react';
import { Drawer, Container, Content, Tab, Tabs, Header, Picker } from 'native-base';
import {  View, Text, TouchableOpacity } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import  TabView  from './TabView';

const Item = Picker.Item;
class PickerExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key1',
            results: {
                items: []
            }
        }
    }
    onValueChange (value: string) {
        this.setState({
            selected1 : value
        });
    }
    render() {
        return (
            <Container>
                <Content>
                    <Picker
                        supportedOrientations={['portrait','landscape']}
                        iosHeader="Select one"
                        mode="dropdown"
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}>
                        <Item label="Wallet" value="key0" />
                        <Item label="ATM Card" value="key1" />
                        <Item label="Credit Card" value="key2" />
                        <Item label="Debit Card" value="key3" />
                   </Picker>
                </Content>
            </Container>
        );
    }
}


export default class DrawerExample extends Component {
constructor(props) {
super(props);
this.state = {
toggled: false,
store: {},
theme: null
};
}

toggleDrawer() {
this.state.toggled ? this._drawer.close() : this._drawer.open();
}

openDrawer() {
this.setState({toggled: true});
    this._drawer._root.open();
}

closeDrawer() {
this.setState({toggled: false});
}

render() {
return (
  <Container>
    <Header hasTabs />
    <Tabs>
        <Tab heading="Tab1">
          <Drawer
            ref={(ref) => this._drawer = ref}
            type='displace'
            content={<TabView style={{backgroundColor: '#eee', height: 800}} />}
            onClose={this.closeDrawer.bind(this)}
            onOpen={this.openDrawer.bind(this)}
            openDrawerOffset={100}
            panOpenMask={.25}
          >
            <View>
              <TouchableOpacity onPress={this.openDrawer.bind(this)}>
                <Text>Open Drawer</Text>
              </TouchableOpacity>
            </View>  
          </Drawer> 
        </Tab>
        <Tab heading="Tab2">
          <PickerExample/>
        </Tab>
    </Tabs>
         
   
  </Container>
      );
  }
}
