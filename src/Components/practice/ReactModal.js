import React, { Component } from 'react'
import { View, Image,TextInput, Text, StyleSheet, AsyncStorage,TouchableOpacity } from 'react-native'
import styles from '../../style/style';

export default class SaveDataExample extends Component {
   constructor() {
      super()
        this.state = {
           userInfo:[
           name:'',
            gender:''
           ]          
          
        }
    }
   
     getData = (data) =>{
        AsyncStorage.multiSet([
        ['name', userInfo.name],
        ['gender', userInfo.gender]

    ])
         console.log(hi)
      AsyncStorage.multiGet(['name', 'gender']).then((data) => {
        let name = data[0][1];
        let gender = data[1][1];
    })

     }
    
   render(){
      return(
        <View style={styles.wrapper}>
        <View style={styles.containerLoginForm}>
          <Text style={styles.text}>{this.state.userInfo.name}</Text>
          <TextInput 
            style={styles.inputLoginForm}
            placeholder = 'type'
            onChangeText = {(text) =>this.setState(userInfo.name:text)}
          />
          <TextInput 
            style={styles.inputLoginForm}
            placeholder = 'type'
            onChangeText = {(text) =>this.setState(userInfo.gender:text)}
          />
          <TouchableOpacity onPress={this.getData}>
            <Text style ={styles.button}>submit</Text>
          </TouchableOpacity>
        </View>  
        </View>
      )
   }
}