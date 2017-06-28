import React, { Component } from 'react';
import { Drawer, Container, Content, Tab, Tabs, Header, Picker } from 'native-base';
import {  View, Text, TouchableOpacity } from 'react-native';
import  TabView from './TabView';
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
      <Drawer
        ref={(ref) => this._drawer = ref}
        type='displace'
        content={<TabView style={{backgroundColor: '#eee', height: 800}} />}
        // onClose={this.closeDrawer.bind(this)}
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
  </Container>
      );
  }
}
