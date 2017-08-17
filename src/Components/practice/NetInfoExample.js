
import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, NetInfo,Text,Image } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import {Icon} from 'native-base'
export default class NetInfoExample extends Component{
	constructor(){
		super()
		this.state = {
			isConnected : true
		}
	}
	componentDidMount() {
		SplashScreen.hide();
    NetInfo.isConnected.addEventListener('change', this.handleConnectionChange);

    NetInfo.isConnected.fetch().done(
      (isConnected) => { this.setState({ status: isConnected }); }
    );
	}

	componentWillUnmount() {
	    NetInfo.isConnected.removeEventListener('change', this.handleConnectionChange);
	}

	handleConnectionChange = (isConnected) => {
	        this.setState({ status: isConnected });
	        console.log(`is connected: ${this.state.status}`);
	        if(isConnected){
	        	alert("connected to internet")
	        }
	        else{
	        	alert("not connected")
	        }
	        
	}
  render() {
    return (
      <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
        {this.state.isConnected ? <Image style={{width: 40, height: 40}} source={require('./img/connected.png')}/> : <Image style={{width: 40, height: 40}} source={require('./img/notconnect.png')}/>}
          
      </View>
    );
}
}