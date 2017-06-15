import React, { Component } from 'react'
import {
   AsyncStorage
} from 'react-native'
import AsyncStorageExample from './AsyncStorageExample'

export default class HomeContainer extends Component {
   constructor() {
      super();
      this.state = {
         'data': ''
      }
   }
 
   // setData = (value) => {
   //    AsyncStorage.setItem('data', value);
   //    this.setState({'data': value});
   // }
   // getData = (value) => {
   //    AsyncStorage.getItem('data', value);
   //    this.setState({'data': value});
   //    alert('data');
   // }
   setData = (value) => {
      AsyncStorage.setItem('someBoolean', JSON.stringify(value))
   }

   getData = (value) => {
      AsyncStorage.getItem('someBoolean', function (err, value) {
       var data = JSON.parse(value); // boolean false
       alert(data);
      });
   }
   render() {
      return (
         <AsyncStorageExample
            data = {this.state.data}
            setData = {this.setData}
            getData = {this.getData}
         />
      );
   }
}