
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TextInput,
  TouchableHighlight,
  Dimensions,
  Button
} from 'react-native';

import getDirections from 'react-native-google-maps-directions'

export default class MapDirections extends Component {

  handleGetDirections = () => {
    const data = {
       source: {
        latitude: -33.8356372,
        longitude: 18.6947617
      },
      destination: {
        latitude: -33.8600024,
        longitude: 18.697459
      },
      params: [
        {
          key: "dirflg",
          value: "w"
        }
      ]
    }

    getDirections(data)
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.handleGetDirections} title="Get Directions" />
      </View>
    );
  }
}


const styles = StyleSheet.create({
 
  container: {
    justifyContent: 'center',
    padding: 30,
    flex: 1,
    alignItems: 'center'
  },
});