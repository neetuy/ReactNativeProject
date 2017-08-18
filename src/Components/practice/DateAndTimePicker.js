import React, { Component } from 'react';
import {
  TimePickerAndroid,
  DatePickerAndroid,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

export default class  TimeAndDateAndroidExample extends Component{

  constructor(){
  	super()
  	this.state = {
      presetHour: 4,
      presetMinute: 4,
      presetText: 'pick a time, default: 4:04AM',
      simpleText: 'pick a time',
      presetDate: new Date(2020, 4, 5),
      allDate: new Date(2020, 4, 5),
      simpleText: 'pick a date',
      minText: 'pick a date, no earlier than today',
      maxText: 'pick a date, no later than today',
      presetText: 'pick a date, preset to 2020/5/5',
      allText: 'pick a date between 2020/5/1 and 2020/5/10',
  }
  }
  

  async showTimePicker(stateKey, options){
    try {
      const {action, minute, hour} = await TimePickerAndroid.open(options);
      var newState = {};
      if (action === TimePickerAndroid.timeSetAction) {
        newState[stateKey + 'Text'] = _formatTime(hour, minute);
        newState[stateKey + 'Hour'] = hour;
        newState[stateKey + 'Minute'] = minute;
      } else if (action === TimePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  }
  async showDatePicker(stateKey, options) {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  }
  componentDidMount() {
        SplashScreen.hide();
        
    }
  render() {
    return (
      	<View style={styles.container}>
        <View>
          <TouchableWithoutFeedback
            onPress={this.showTimePicker.bind(this, 'preset', {
              hour: this.state.presetHour,
              minute: this.state.presetMinute,
            })}>
            <Text style={styles.text}>{this.state.presetText}</Text>
          </TouchableWithoutFeedback>
        
        </View>
        <View>
          <TouchableWithoutFeedback
            onPress={this.showDatePicker.bind(this, 'all', {
              date: this.state.allDate,
              minDate: new Date(2020, 4, 1),
              maxDate: new Date(2020, 4, 10),
            })}>
            <Text style={styles.text}>{this.state.allText}</Text>
          </TouchableWithoutFeedback>
        </View>
        </View>
       
    )
  }
}

function _formatTime(hour, minute) {
  return hour + ':' + (minute < 10 ? '0' + minute : minute);
}

var styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
  text: {
    color: 'black',
  },
});

