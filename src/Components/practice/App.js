import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

import { TabNavigator, StackNavigator } from 'react-navigation'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {this.props.navigation.navigate('Test', {id: Math.random()})}}>
          <Text>Press</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class Test extends Component {
  componentWillMount() {
    alert('mount :' + this.props.navigation.state.params.id )
  }
  componentWillUnmount() {
    alert('unmount :' + this.props.navigation.state.params.id )
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {this.props.navigation.navigate('App')}}>
          <Text>{this.props.navigation.state.params.id}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const Main = StackNavigator({
  App: {
    screen: App,
  },
  Test: {
    screen: Test,
  },
})

const Root = TabNavigator({
  Main1: {
    screen: Main,
  },
  Main2: {
    screen: Main,
  },
});

export default Root

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    backgroundColor: '#ecf0f1',
  },
});