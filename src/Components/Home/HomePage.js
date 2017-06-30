import { Drawer, Container, Content, Tab, Tabs, Header,Body, Title, Right,Button, Icon,List, ListItem} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import React, {Component} from "react";
import {TouchableOpacity, Text,View, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Router, Scene, Schema } from 'react-native-router-flux';
import styles from '../../style/style';
import NavigationBar from 'react-native-navbar';
import DrawerExample from './../routes/DrawerExample';
import ListViewDemo from './../listview/ListViewDemo';
import ListViewDemo1 from './../listview/ListViewDemo1';


 class Home  extends Component {
    goToHeaderTabs(){
      Actions.headerTabs()
    }
    
    render(){
      return (
      <Container>
      <Header>
      <Title>
        Home
      </Title>
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
 const ListExample = () => {
  return (
    <Container>
      <Content>
        <List>
          <ListItem >
              <Icon name="person"/>
          </ListItem>
          <ListItem>
             <Icon name="search"/>
          </ListItem>
          <ListItem>
              <Icon name="clock"/>
          </ListItem>
          <ListItem>
              <Icon name="color-filter"/>
          </ListItem>
          <ListItem>
              <Icon name="paper"/>
          </ListItem>
          <ListItem>
              <Icon name="settings"/>
          </ListItem>
           <ListItem>
              <Icon name="bookmark"/>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};
 
 
export default Home