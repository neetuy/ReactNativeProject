import React, {Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon,Button,Container,Right,Header,Body,Left,Content,Title,Tabs,Tab} from 'native-base';
import {Navigator, TabNavigator} from 'react-navigation'
import  fileName from './../JsonExample/fileName.json'
import MainScreen from './MainScreen';
// import HomePage from './Home/HomePage';
import SetupScreen from './SetupScreen';
import ListExample from './../listview/ListExample';

 const TabTogle = TabNavigator({

  MainScreen: {
    screen: MainScreen,
  },
  SetupScreen: {
    screen: SetupScreen,
  },
 
  })


export default class Example extends Component {


  render() {
    return (
      // <Container>
      //   <Header>
      //     <Left>
      //       <Button transparent>
      //         <Icon name='arrow-back' />
      //       </Button>
      //     </Left>
      //     <Body>
      //       <Title>Header</Title>
      //     </Body>
      //     <Right>
      //       <Button transparent>
      //         <Icon name='menu' />
      //       </Button>
      //     </Right>
      //   </Header>
      //   <Content>
      //     <Button
      //       onPress={() => this.props.navigation.navigate('MainScreen')}
      //       title="Go to Lucy's profile"
      //     />
      //   </Content>
      // </Container>
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
            <Col style={{ width: 70 }}>     
                <ListExample/>
            </Col>
            <Col>
              <TabTogle/>
            </Col>
          </Row>
        </Grid>
        </Content>
      </Container>
    );

  }
}
  



