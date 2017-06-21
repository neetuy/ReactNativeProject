import React from 'react'
import { Router, Scene,  Schema, Animations } from 'react-native-router-flux'
import {TouchableOpacity, Text,View, Icon, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Home from '../Home/HomePage'
import Login from '../Login/Login'
import ListViewDemo from '../listview/ListViewDemo'
import ListViewDemo1 from '../listview/ListViewDemo1'

deleteItem = (value) => {
    // const goToLogin = () => {
    //    Actions.login();
    // }
      AsyncStorage.removeItem('email').then((value) => {
          var email = JSON.parse(value); 
          alert(email);
          console.log(email);
      });
    }
     
const Routes = () => (
   <Router>
      <Scene key = "root">
   		<Scene key = "login" component = {Login} title = "Login"  initial = {true} />
      	<Scene key = "home" component = {Home} title = "Home" rightTitle={'delete session'} onRight={deleteItem}/>
      	<Scene key = "listView" component = {ListViewDemo} title = "ListView"  />
      	<Scene key = "listView1" component = {ListViewDemo1} title = "ListView1"  />
      </Scene>
   </Router>
)

export default Routes
