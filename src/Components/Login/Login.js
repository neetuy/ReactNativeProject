
import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, AsyncStorage } from 'react-native'
import LoginForm from './LoginForm';
import { Actions } from 'react-native-router-flux'


export default class Login extends Component {
   constructor() {
      super()
      this.state = {
         email: '',
         password: '',
          'data': ''
      }
      // this.submit = this.submit.bind(this);
    }
    updateEmail = (value) => {
      AsyncStorage.setItem('email', JSON.stringify(value))
      this.setState({email: value})
    }
    updatePassword = (value) => {
      this.setState({password: value})
      AsyncStorage.setItem('password', JSON.stringify(value))
    }
     // login = () => {
     //    alert('email: ' + this.state.email + ' password: ' + this.state.password)
     // }
    deleteItem = (value) => {
      var email = this.state.email;
      var password = this.state.password;
      AsyncStorage.removeItem('email').then((value) => {
         this.setState({email: value});
         var email = JSON.parse(value); // boolean false
        alert(email);
      });
      AsyncStorage.removeItem('password').then((value) => {
         this.setState({password: value});
         var data = JSON.parse(value); // boolean false
        alert(password);
      });

    }
   submit = () => {
    email=this.state.email;
    password=this.state.password;
    const goToHome = () => {
      Actions.home()  
    }
    getData = (value) => {
      AsyncStorage.getItem('email').then((value) => {
        this.setState({email: value});
        var email = JSON.parse(value); // boolean false
        alert(email);
      });
      AsyncStorage.getItem('password').then((value) => {
        this.setState({password: value});
        var password = JSON.parse(value); // boolean false
        alert(password);
      });

    }
     if (email != 'abc123@gmail.com' || password !='abc123') {
      alert('wrong email & password');
    } 
    else{
      getData()
      goToHome()
    }
  }
   render(){
      return(
        <View style={styles.wrapper}>
          <View style={styles.logoContainer}>
            <Image 
              style={styles.logo}
              source={require("../../images/logo.png")}
            />
            <Text style={styles.title}>Login Page</Text>
          </View>
          <View>
            <LoginForm
              updateEmail = {this.updateEmail}
              updatePassword = {this.updatePassword}
              login = {this.login}
              data = {this.state.data}
              submit = {this.submit}
            />
          </View>  
        </View>
      )
   }
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
      padding: 23

   },
   wrapper: {
    flex: 1,
    backgroundColor: '#3498db', 
  },
  logoContainer: {
    flexGrow:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    color: '#fff',
    marginTop: 10,
    width: 100,
    textAlign:'center'
  },
})