import React, {Component} from 'react';
import { TouchableOpacity, Text, View, StyleSheet} from 'react-native';

import {Icon} from 'native-base';
import Sound from 'react-native-sound';

export default class MusicPlay extends Component {
 playSound = () =>{
    
   var whoosh = new Sound('frog.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  } 
  // loaded successfully
  console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
});

whoosh.play((success) => {
  if (success) {
    console.log('successfully finished playing');
  } else {
    console.log('playback failed due to audio decoding errors');
  }
});
  }

  render() {

    return (
      <View style ={styles.container}>
    <TouchableOpacity onPress={this.playSound} >
      <Icon name='ios-play' size={22} color={'rgb(44, 157, 51)'} />
      <Text>Play Call</Text>
      </TouchableOpacity>
  </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})