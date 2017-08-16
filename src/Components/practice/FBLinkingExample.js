
// import React, { Component } from 'react'
// import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
// import  {LoginButton,AccessToken} from 'react-native-fbsdk';


// export default class FBLinkingExample extends Component{
//    componentDidMount() {
//       SplashScreen.hide();
//     }
//   render() {
//     return (
//       <View>
//         <LoginButton
//           publishPermissions={["publish_actions"]}
//           onLoginFinished={
//             (error, result) => {
//               if (error) {
//                 alert("login has error: " + result.error);
//                 console.log(result.error)
//               } else if (result.isCancelled) {
//                 alert("login is cancelled.");
//               } else {
//                 AccessToken.getCurrentAccessToken().then(
//                   (data) => {
//                     alert(data.accessToken.toString())
//                     console.log(data.accessToken.toString())
//                   }
//                 )
//               }
//             }
//           }
//           onLogoutFinished={() => alert("logout.")}/>
//       </View>
//     );
//   }
// };


import React, { Component, PropTypes } from 'react';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class FbLoginButton extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={styles.container}>
      <LoginButton
        publishPermissions={["publish_actions"]}
        onLoginFinished={
          (error, result) => {
            if (error) {
              alert("login has error: " + result.error);
              console.log(result.error)
            } else if (result.isCancelled) {
              alert("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then(
                (data) => {
                  alert(data.accessToken.toString())
                }
              )
            }
          }
        }
        onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }

}

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

export default FbLoginButton;