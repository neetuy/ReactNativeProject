
import React, {Component} from 'react'
import {TouchableOpacity, Text,View, AsyncStorage} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import Router from './routes/Router';
export default class RoutesPage extends Component {
      render() {
          return (
              <Container>
              <Router this.props.scenes={scenes} />
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