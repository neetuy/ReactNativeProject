import {Container, Header, Content,List, ListItem, Right, Left, Body, Icon, Title, Switch} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import React, {Component} from "react";
import {TouchableOpacity, Text,View, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Router, Scene, Schema } from 'react-native-router-flux';
import styles from '../../style/style';
import NavigationBar from 'react-native-navbar';
import DrawerExample from './../routes/DrawerExample';

 class Home  extends Component {
    goToAbout(){
      Actions.about()
   	}
   	goToTopics(){
      Actions.topics()
   	}
    goToDrawer(){
      Actions.drawer()
    }
    render(){
      return (
      <Container style={styles.containerHome}>
        <Content>
          <Grid>
            <Col style={styles.col1Home}>  
              <Row  style={styles.row1Home}>
                <TouchableOpacity onPress = {this.goToAbout}>
                  <Text>Go To About</Text>
                </TouchableOpacity>
              </Row>
            </Col>
            <Col style={styles.col1Home}>  
              <Row style={styles.row1Home}>
                <TouchableOpacity onPress = {this.goToTopics}>
                  <Text>Go To Topics</Text>
                </TouchableOpacity>
              </Row>
            </Col>
            <Col style={styles.col1Home}>  
              <Row style={styles.row1Home}>
                <TouchableOpacity onPress = {this.goToDrawer}>
                  <Text>Go To drawer</Text>
                </TouchableOpacity>
              </Row>
            </Col>
          </Grid>   
        </Content>
    </Container>
    );
    }
    
};
 class About extends Component {
 	 goToHome = () => {
      Actions.home()
   	}
    render(){
      return (
    <Container style={styles.containerHome}>
        <Content>
          <Grid>
            <Col style={styles.colAbout}>  
              <ListItem icon >
                    <Left>
                        <Icon name="plane" />
                    </Left>
                    <Body>
                      <Text>Airplane Mode</Text>
                    </Body>
                    <Right>
                        <Switch value={false} />
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Icon name="wifi" />
                    </Left>
                    <Body>
                      <Text>Wi-Fi</Text>
                    </Body>
                    <Right>
                        <Text>GeekyAnts</Text>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Icon name="bluetooth" />
                    </Left>
                    <Body>
                      <Text>Bluetooth</Text>
                    </Body>
                    <Right>
                        <Text>On</Text>
                        <Icon name="arrow-forward" />
                    </Right>
              </ListItem>
            </Col>
          </Grid>
        </Content>
    </Container>
    );
    }
    
};
 class Topics extends Component {

  goToHome(){
      Actions.home()
   	}
  render(){
      var items = ['ListItem 4' , 'ListItem 5', 'ListItem 6']; 
    return (  
    <Container style={styles.containerHome}>
        <Content>
          <Grid>
            <Col style={styles.colTopics}>  
              <List dataArray={items}
                renderRow={(item) =>
                    <ListItem>
                      <Left>
                        <Text>{item}</Text>
                      </Left>
                      <Right>  
                        <Icon name="arrow-forward" />
                      </Right>
                    </ListItem>
                }>
              </List>
            </Col>
          </Grid>
        </Content>
    </Container>
    
    );
    }  
};
 const HomePage = () => (
   <Router>
      <Scene key = "root"> 
      		<Scene key = "home" component = {Home} title = "Home"  initial = {true}/>
         	<Scene key = "about" component = {About} title = "About" />
         	<Scene key = "topics" component = {Topics} title = "Topics"  />
          <Scene key = "drawer" component = {DrawerExample} title = "Drawer"  />
      </Scene>
   </Router>
   )


export default HomePage