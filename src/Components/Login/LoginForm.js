import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import {
   View,
   Text,
   TouchableHighlight,
   TextInput,
   StyleSheet
} from 'react-native';
import styles from '../../style/style';

export default LoginForm = (props) => {
  const goToHome = () => {
      Actions.home()
   }
   return (
      <View style = {styles.containerLoginForm}>
         <TextInput
            style = {styles.inputLoginForm}
            placeholder = 'Email'
            autoCapitalize = 'none'
            onChangeText = {props.updateEmail}
         />
         <TextInput
            style = {styles.inputLoginForm}
            placeholder = 'Password'
            autoCapitalize = 'none'
            onChangeText = {props.updatePassword}
            
         />
         
         <TouchableHighlight
            style = {styles.buttonContainerLoginForm}
            onPress = {props.submit}
            >
            <Text style = {styles.buttonTextLoginForm}>
              Login
            </Text>
         </TouchableHighlight>
      </View>
   )
}

