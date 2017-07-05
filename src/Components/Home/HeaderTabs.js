
import React, { Component } from 'react';
import { View, StyleSheet,TouchableOpacity,Text } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content,Header,Left,Right,Title,Icon, Body } from 'native-base';
import GridExample from  '../GridExample/GridExample'
import GridExample1 from  '../GridExample/GridExample1'
import ListExample from './../listview/ListExample';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'chapter' },
      { key: '2', title: 'verse' },
    ],
  };

  _handleChangeTab = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    '1': GridExample,
    '2': GridExample1,
  });
  goToHome = () => {
      Actions.home()      
   }

  render() {
    return (
      <Container>
         <Header>
          <Left>
          <TouchableOpacity  onPress = {this.goToHome}>
            <Icon name="ios-arrow-back" style={{color:'#fff'}}/>
          </TouchableOpacity>
          </Left>
          <Body>
            <Title>
              Books
            </Title>
          </Body>
        </Header>
            <TabViewAnimated
              style={styles.container}
              navigationState={this.state}
              renderScene={this._renderScene}
              renderHeader={this._renderHeader}
              onRequestChangeTab={this._handleChangeTab}
            />
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});