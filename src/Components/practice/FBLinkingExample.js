
import React, { Component } from 'react'
import { View, StyleSheet, Animated, TouchableOpacity, NetInfo } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


import FBSDK, { LoginButton } from 'react-native-fbsdk';

const onLoginFinished = (error, result) => {
  if (error) {
    alert("login has error: " + error);
    console.log( result.error)
  } else if (result.isCancelled) {
    alert("login is cancelled.");
  } else {
    alert("login has finished with permissions: " + result.grantedPermissions)
  }
};

export default class FbLoginButton extends Component {
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
      <View style={styles.container}>
      {this.state.isConnected ? <Text>online</Text> : <Text>offline</Text>}
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={onLoginFinished}
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
}