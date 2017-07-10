
import React, {Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image} from 'react-native';
import { Icon,Button,Container,Right} from 'native-base';
import {Navigator, TabNavigator} from 'react-navigation'
import  fileName from './../JsonExample/fileName.json'
import Verse from './Verse'
export default class MainScreen extends Component {

  constructor(props){
        super(props)
        this.state ={
            data:[]     
          }
          
    }
    static navigationOptions = {
    tabBarLabel: 'Book',
    
  };
    getData = () =>{
      const data = fileName;
      this.setState({data}) 
      // alert(this.props.getDataAnother) 
    }
    componentDidMount() {
        this.getData();
    }
    
  render() {
    let data = this.state.data;
     let id = false;
    return (

      <View>
      <View>
      {
        data.map(item =>
        <TouchableOpacity
        style = {styles.container}
         onPress={() => {this.props.navigation.navigate('Verse', {id:item.id,gende:item.gender,first_name: item.first_name,last_name: item.last_name,email:item.email})}}
        >
          <Text key={item.id}>{item.id}</Text>
          <Right>
            <Icon name="ios-arrow-forward"/>
          </Right>
          </TouchableOpacity>
          )
      }
        
      </View>
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