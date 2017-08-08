import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class GestureExample extends Component {
  constructor(){
    super()
    this.state = {
       lastPress: 0
    }
  }
  onPressButton=() =>{
    Alert.alert('You tapped the button!')
  }

  onLongPressButton=() => {
    Alert.alert('You long-pressed the button!')
  }

  onDoublePress=()=> {
    var delta = new Date().getTime() - this.state.lastPress;
      console.log(delta)
    if(delta < 500) {
     Alert.alert('You double-pressed the button!')
    }
    this.setState({
      lastPress: new Date().getTime()
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight  onPress={this.onPressButton} onLongPress={this.onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onDoublePress} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Double Press</Text>
          </View>
        </TouchableHighlight>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})