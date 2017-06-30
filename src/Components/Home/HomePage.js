import { Drawer, Container, Content, Tab, Tabs, Header,Body, Title, Right,Button, Icon,List, ListItem,Left} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import React, {Component} from "react";
import {TouchableOpacity, Text,View, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Router, Scene, Schema } from 'react-native-router-flux';
import styles from '../../style/style';
import ListViewDemo from './../listview/ListViewDemo';
import ListViewDemo1 from './../listview/ListViewDemo1';
import ListExample from './../listview/ListExample';


 class Home  extends Component {
    goToHeaderTabs(){
      Actions.headerTabs()
    }
    goToLanguage(){
      Actions.language()
    }
    
    render(){
      return (
      <Container>
      <Header>
      <Left>
        <Title>
          Autographa Go
        </Title>
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
            <Col style={{ width: 60 }}>     
                <ListExample/>
            </Col>
            <Col md={6}>
              <Tabs>
              <Tab heading="New Testament">
                <ListViewDemo />
              </Tab>
              <Tab heading="Old Testament">
                <ListViewDemo1 />
              </Tab>
              </Tabs>
            </Col>
          </Row>
          </Grid>   
        </Content>
    </Container>
    );
    }
    
};
 
export default Home