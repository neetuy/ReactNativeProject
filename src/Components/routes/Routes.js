import React from 'react'
import { Router, Scene,  Schema, Animations } from 'react-native-router-flux'
import {TouchableOpacity, Text,View, Icon, AsyncStorage} from 'react-native';
import Home from '../Home/HomePage'
import Login from '../Login/Login'
import DrawerExample from './DrawerExample'
import styles from '../../style/style';


deleteItem = (value) => {
    // const goToLogin = () =>{
    //   Actions.login();
    // }
      AsyncStorage.removeItem('email').then((value) => {
         var email = JSON.parse(value); 
        alert(email);
      });
      // goToLogin();
    }
     
const Routes = () => (
   <Router style={styles.routeMargin}>
      <Scene key = "root">
   		<Scene key = "login" component = {Login} navigationBarStyle={styles.routeCustom} title = "Login"  initial = {true} />
      <Scene key = "home" component = {Home} title = "AutoGrapha Go" rightTitle={'English ULB'} onRight={deleteItem} titleStyle={styles.titleStyle} initial = {true} />
      <Scene key = "drawer" component = {DrawerExample} title= "Drawer" />
      </Scene>
   </Router>
)

export default Routes

