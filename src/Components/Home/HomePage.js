import {Container, Header, Content,List, ListItem, Right, Left, Body, Icon, Title, Switch} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import React, {Component} from "react";
import {TouchableOpacity, Text,View, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Router, Scene, Schema } from 'react-native-router-flux';
import styles from '../../style/style';
import NavigationBar from 'react-native-navbar';


deleteItem = (value) => {
      AsyncStorage.removeItem('email').then((value) => {
         // this.setState({email: value});
         var email = JSON.parse(value); // boolean false
        alert(email);
      });
      AsyncStorage.removeItem('password').then((value) => {
         // this.setState({password: value});
         var password = JSON.parse(value); // boolean false
        alert(password);
      });

    }
getData = (value) => {
      AsyncStorage.getItem('email').then((value) => {
        // this.setState({email: value});
        var email = JSON.parse(value); // boolean false
        alert(email);
      });
      AsyncStorage.getItem('password').then((value) => {
        // this.setState({password: value});
        var password = JSON.parse(value); // boolean false
        alert(password);
      });

    }
 const Home = () => {
    const goToAbout = () => {
      Actions.about()
   	}
   	const goToTopics = () => {
      Actions.topics()
   	}
    return (
	    <Container style={styles.containerHome}>
	      <Content>
          <Grid style={styles.homeGridMargin}>  
            <Col style={styles.col1Text}>
              <Row>
                <TouchableOpacity onPress = {deleteItem}>
                  <Text>delete</Text>
                </TouchableOpacity>
              </Row>
            </Col>
            <Col style={styles.col1Text}>
              <Row>
                <TouchableOpacity onPress = {getData}>
                  <Text>getData</Text>
                </TouchableOpacity>
              </Row>
            </Col>
          </Grid>
	        <Grid>
	          <Col style={styles.col1Home}>  
	            <Row  style={styles.row1Home}>
	              <TouchableOpacity onPress = {goToAbout}>
	                <Text>Go To About</Text>
	              </TouchableOpacity>
	            </Row>
	          </Col>
	          <Col style={styles.col1Home}>  
	          	<Row style={styles.row1Home}>
	            	<TouchableOpacity onPress = {goToTopics}>
	              	<Text>Go To Topics</Text>
	            	</TouchableOpacity>
	          	</Row>
	        	</Col>
          </Grid>
          
	      </Content>
	  </Container>
    );
};
 const About = () => {
 	const goToHome = () => {
      Actions.home()
   	}
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
};
 const Topics = () => {
 	const goToHome = () => {
      Actions.home()
   	}
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
};
const NavigationBarExample = () => {
   return (
    <View style={styles.container}>
      <NavigationBar
        title={titleConfig}
        rightButton={rightButtonConfig}
        getData={getData}
        deleteItem={deleteItem}
      />
    </View>
  );
}

const rightButtonConfig = {
  title: 'delete',
};

const titleConfig = {
  title: 'get',
};


 const HomePage = () => (
   <Router>
      <Scene key = "root">
          
      		<Scene key = "home" component = {Home} title = "Home"  initial = {true}/>
         	<Scene key = "about" component = {About} title = "About" />
         	<Scene key = "topics" component = {Topics} title = "Topics"  />
      </Scene>
   </Router>
   )

   

export default HomePage


