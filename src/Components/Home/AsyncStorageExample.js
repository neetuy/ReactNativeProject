import React, { Component } from 'react';
import {
   Text,
   View,
   TextInput,
   StyleSheet,
   TouchableHighlight
} from 'react-native';

export default AsyncStorageExample = (props) => {
   return (
      <View style = {styles.container}>

         <TextInput
            style = {styles.textInput}
            autoCapitalize = 'none'
            onChangeText = {props.setData}
         />

         <Text style = {styles.text}>
            {props.data}
         </Text>
         <TouchableHighlight
            style = {styles.buttonContainer}
            onPress = {props.getData}
            >
            <Text style = {styles.buttonText}>
              Data
            </Text>
         </TouchableHighlight>
      </View>
   );
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70
   },
   text: {
      flex: 1,
      fontWeight: 'bold'
   },
   textInput: {
      margin: 15,
      height: 40,
      width: 100,
      borderColor: 'grey',
      borderWidth: 1
   },
   buttonContainer:{
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText:{
    textAlign: 'center',
    color: '#fff',
  }
});