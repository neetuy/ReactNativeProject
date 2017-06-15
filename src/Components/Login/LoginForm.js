import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'


import {
   View,
   Text,
   TouchableHighlight,
   TextInput,
   StyleSheet
} from 'react-native'

export default LoginForm = (props) => {
  const goToHome = () => {
      Actions.home()
   }
   return (
      <View style = {styles.container}>
         <TextInput
            style = {styles.input}
            placeholder = 'Email'
            autoCapitalize = 'none'
            onChangeText = {props.updateEmail}
         />
         <TextInput
            style = {styles.input}
            placeholder = 'Password'
            autoCapitalize = 'none'
            onChangeText = {props.updatePassword}
            
         />
         
         <TouchableHighlight
            style = {styles.buttonContainer}
            onPress = {props.submit}
            >
            <Text style = {styles.buttonText}>
              Login
            </Text>
         </TouchableHighlight>
      </View>
   )
}


const styles = StyleSheet.create({
  container:{
    padding: 20
  },
  input:{
    height:40,
    color: '#fff',
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 40,
    paddingHorizontal: 10
  },
  buttonContainer:{
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText:{
    textAlign: 'center',
    color: '#fff'
  }
});

