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
  
   return (
      <View style = {styles.containerLoginForm}>
         <TextInput
            style = {styles.inputLoginForm}
            placeholder = 'Email'
            autoCapitalize = 'none'
            onChangeText = {props.updateEmail}
         />
      </View>
   )
}

