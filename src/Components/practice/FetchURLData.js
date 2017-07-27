import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class FetchExample extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  render() {
    let data = this.state.data;
    return (
      <View style={styles.container}>
      <ScrollView >
      <View>
      {
        data.map(items =>
          <Text style={styles.textCustom}>{items}</Text>
          )
      }
      </View>
      </ScrollView>
      </View>
    )
  }
  componentWillMount() {
    fetch("https://raw.githubusercontent.com/friendsofagape/Autographa_Repo/master/Bibles/package.json")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({data: responseData.languages_available});
      })
      .done();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  textCustom:{
    fontSize:18,
    color:'blue',
  }
});

