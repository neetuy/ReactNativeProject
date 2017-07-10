import React, { Component } from 'react'
import { View, Image,TextInput, Text, StyleSheet, AsyncStorage } from 'react-native'

export default class SaveDataExample extends Component {
   constructor() {
      super()
      this.state = {
         myKey:"",
      }
      // this.submit = this.submit.bind(this);
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
        <Text style={styles.text}>{this.state.myKey}</Text>
        <View>
          <TextInput 
          style={styles.inputForm}
          onChangeText = {(text) =>this.saveData(text)}
          value=""
          />
        </View>  
        </View>
      )
   }
}

const styles = StyleSheet.create({
  wrapper: {
  flex: 1,
  padding:30,
  backgroundColor: '#3498db', 
  alignItems: 'stretch',
  justifyContent: 'center',
},
  
inputForm:{
  height:40,
  color: '#fff',
  backgroundColor: 'rgba(255,255,255,0.2)',
  
},
text:{
  textAlign:'center',
  fontSize:18
}
})