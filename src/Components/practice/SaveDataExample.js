import React, { Component } from 'react'
import { View, Image,TextInput, Text, StyleSheet, AsyncStorage } from 'react-native'
import styles from '../../style/style';

export default class SaveDataExample extends Component {
   constructor() {
      super()
      this.state = {
         myKey:'',
      }
    }
    saveData = (value) => {  
      AsyncStorage.setItem('myKey',value)
      this.setState({myKey: value});
     }
     componentDidMount(){
      AsyncStorage.getItem('myKey').then((value) =>{
        this.setState({'myKey': value})
      }).done();
     }
    
   render(){
      return(
        <View style={styles.wrapper}>
        <View style={styles.containerLoginForm}>
          <Text style={styles.text}>{this.state.myKey}</Text>
          <TextInput 
            style={styles.inputLoginForm}
            placeholder = 'type'
            onChangeText = {(text) =>this.saveData(text)}
          />
        </View>  
        </View>
      )
   }
}

