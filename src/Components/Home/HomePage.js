
import React, { Component } from 'react';
import { View, StyleSheet,TouchableOpacity,Text } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content,Header,Left,Right,Title,Icon } from 'native-base';
import ListViewDemo from './../listview/ListViewDemo';
import ListViewDemo1 from './../listview/ListViewDemo1';
import ListExample from './../listview/ListExample';

export default class Home extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Old Testament' },
      { key: '2', title: 'New Testament' },
    ],
  };

  _handleChangeTab = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    '1': ListViewDemo,
    '2': ListViewDemo1,
  });

  render() {
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
            <Col style={{ width: 70 }}>     
              <ListExample/>
            </Col>
            <Col md={6}>
            <TabViewAnimated
              style={styles.container}
              navigationState={this.state}
              renderScene={this._renderScene}
              renderHeader={this._renderHeader}
              onRequestChangeTab={this._handleChangeTab}
            />
            </Col>
          </Row>
        </Grid>
        </Content>
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});