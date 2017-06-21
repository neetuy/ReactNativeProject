import React from 'react'
import { Router, Scene,  Schema, Animations,TouchableOpacity, AsyncStorage, Icon } from 'react-native-router-flux'
import Home from '../Home/HomePage'
import Login from '../Login/Login'
import ListViewDemo from '../listview/ListViewDemo'
import ListViewDemo1 from '../listview/ListViewDemo1'

const deleteItem = (value) => {
    AsyncStorage.removeItem('email').then((value) => {
         // this.setState({email: value});
         var email = JSON.parse(value); // boolean false
        alert(email);
      })
      AsyncStorage.removeItem('password').then((value) => {
         // this.setState({password: value});
         var password = JSON.parse(value); // boolean false
        alert(password);
      })
      return(email)
   }
     

const filterIcon = () => (
      <TouchableOpacity onPress={deleteItem} >
            <Icon name="check" size={26} color='grey' />
      </TouchableOpacity>
      )



const Routes = () => (
   <Router>
      <Scene key = "root">
   		<Scene key = "login" component = {Login} title = "Login"  initial = {true} />
      	<Scene key = "home" component = {Home} title = "Home" rightTitle={'delete session'} onRight={ () =>{alert(email)}}/>
      	<Scene key = "listView" component = {ListViewDemo} title = "ListView"  />
      	<Scene key = "listView1" component = {ListViewDemo1} title = "ListView1"  />
      </Scene>
   </Router>
)

export default Routes
