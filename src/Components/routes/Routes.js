import React, {Component} from 'react'
import { Router, Scene,  Schema, Animations, Actions } from 'react-native-router-flux'
import {TouchableOpacity, Text,View, AsyncStorage} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import Home from '../Home/HomePage'
import MenuExample from '../Home/MenuExample'
import Login from '../Login/Login'
import DrawerExample from './DrawerExample'
import styles from '../../style/style';

export default class RoutesPage extends Component {
      render() {
          return (
              <Container>
              <Router scenes={scenes}/>
                  <Content/>
                  <Footer >
                      <FooterTab>
                          <Button vertical>
                              <Icon name="apps" />
                              <Text>Apps</Text>
                          </Button>
                          <Button vertical>
                              <Icon name="camera" />
                              <Text>Camera</Text>
                          </Button>
                          <Button active vertical>
                              <Icon active name="navigate" />
                              <Text>Navigate</Text>
                          </Button>
                          <Button vertical>
                              <Icon name="person" />
                              <Text>Contact</Text>
                          </Button>
                      </FooterTab>
                  </Footer>
              </Container>
          );
      }
  }

const scenes = Actions.create(
  <Scene key="root">
    <Scene key = "login" component = {Login} navigationBarStyle={styles.routeCustom} title = "Login"/>
    <Scene key = "home"  component = {Home} title = "AutoGrapha Go" renderRightButton={MenuExample} wrapRouter={false} titleStyle={styles.titleStyle} initial = {true} />
    <Scene key = "drawer" component = {DrawerExample} title= "Drawer" />
  </Scene>
);
     