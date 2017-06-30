import React, { Component } from 'react';
import { Container, Content, Tab, Tabs, Header, Picker,Body, Title, Left,Button, Icon} from 'native-base';
import {  View, Text, TouchableOpacity, StyleSheet,ListView } from 'react-native';
import {Grid,Row,Col} from 'react-native-easy-grid'

export default class StackOverflow extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'item'
      ])
    };
  }

  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'center'
  },
});