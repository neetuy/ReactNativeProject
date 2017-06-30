import React, { Component } from 'react';
import { Container, Content, Tab, Tabs, Header, Picker,Body, Title, Left,Button, Icon} from 'native-base';
import {  View, Text, TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';


export default class HeaderTabs extends Component {
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
        Language and Version
      </Title>
    </Body>
  </Header>
  <Tabs>
      <Tab heading="Language">
        
      </Tab>
      <Tab heading="Version">
       <View style={{flex:1,}}>
       <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Grid>
        <Row style={styles.container}>
          <Col style={{borderWidth:1,padding:20}}><Text>{rowData}</Text></Col>
          <Col style={{borderWidth:1,padding:20}}><Text>{rowData}</Text></Col>
          <Col style={{borderWidth:1,padding:20}}><Text>{rowData}</Text></Col>
          <Col style={{borderWidth:1,padding:20}}><Text>{rowData}</Text></Col>
        </Row>
        <Row style={styles.container}>
          <Col style={{borderWidth:1,padding:20}}><Text>{rowData}</Text></Col>
          <Col style={{borderWidth:1,padding:20}}><Text>{rowData}</Text></Col>
          <Col style={{borderWidth:1,padding:20}}><Text>{rowData}</Text></Col>
          <Col style={{borderWidth:1,padding:20}}><Text>{rowData}</Text></Col>
        </Row>
        <Row style={styles.container}>
          <Col style={{borderWidth:1,padding:20}}><Text>{rowData}</Text></Col>
          <Col style={{borderWidth:1,padding:20}}><Text>{rowData}</Text></Col>
          <Col style={{borderWidth:1,padding:20}}><Text>{rowData}</Text></Col>
          <Col style={{borderWidth:1,padding:20}}><Text>{rowData}</Text></Col>
        </Row>
      </Grid>}
        />
      </View>
      </Tab>
  </Tabs>       
  </Container>
  )
  }
}
