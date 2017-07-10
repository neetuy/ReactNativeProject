
import React, {Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image} from 'react-native';
import { Icon,Button,Container,Right} from 'native-base';
import {Navigator, TabNavigator} from 'react-navigation'
import  fileName from './../JsonExample/fileName.json'

export default class MainScreen extends Component {

  constructor(props){
        super(props)
        this.state ={
            data:[]     
          }
          
    }
  

  static navigationOptions = {
    tabBarLabel: 'Verse',
    
  };

  render() {
    let id = false;
    let data = this.state.data;
    return (
     
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Book')}}>
        <Text>{this.props.navigation.state.params.id}</Text>
        <Text>{this.props.navigation.state.params.gender}</Text>
        <Text>{this.props.navigation.state.params.first_name}</Text>
        <Text>{this.props.navigation.state.params.last_name}</Text>
        <Text>{this.props.navigation.state.params.email}</Text>
        </TouchableOpacity>
      </View>
      
    )
  }
}

const styles = StyleSheet.create ({
   container: {
      padding:10,
      flexDirection:'row',
      
   },
   
})