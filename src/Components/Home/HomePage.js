import React, {Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon,Button,Container,Right,Header,Body,Left,Content,Title,Tabs,Tab,Drawer} from 'native-base';
import {Navigator, TabNavigator} from 'react-navigation'
import {Actions} from 'react-native-router-flux'
import  fileName from './../JsonExample/fileName.json'
import GridExample1 from "./../GridExample/GridExample1"
import ListExample from './../listview/ListExample';

 

export default class HomePage extends Component {
  goToLanguage = () =>{
    Actions.language()
  }

  openDrawer() {
    this._drawer._root.open();
  }
  closeDrawer() {
    this._drawer._root.close();
  }
  render() {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<ListExample/>}
        onClose={() => this.closeDrawer()}
        openDrawerOffset={340}
      >
      <Container>
        <Header>
          <Left>
            <Button
                transparent
                onPress={() => this.openDrawer()}
              >
                <Icon name='menu' />
              </Button>
          </Left>
          <TouchableOpacity onPress={this.goToLanguage}>
          <Right style={{top:-15}}>
            <Text style={{color:"#fff", fontSize:18,textAlign:'center'}}>
              English ULB
            </Text>
            <Icon name="ios-arrow-down" style={{color:'#fff'}}/>
          </Right>
          </TouchableOpacity>
        </Header>
        <Content>
        <Grid>
          <Row>
            
            <Col>
              <Tabs>
                <Tab heading="Old Testament "><GridExample1/></Tab>
                <Tab heading="New Testament"><GridExample1/></Tab>
              </Tabs>
            </Col>
          </Row>
        </Grid>
        </Content>
      </Container>
    </Drawer>
    );

  }
}
  



