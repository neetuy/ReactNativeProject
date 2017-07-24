import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  View
} from 'react-native';

export default class persistingData extends Component {

  constructor(props){
    super(props)
    this.state = { name: '', phone: '',email:'' }
    this.persistData = this.persistData.bind(this);
    this.clearData = this.clearData.bind(this);
  }

  persistData(){
    let name = this.state.name
    let phone = this.state.phone
    let email = this.state.email
    AsyncStorage.setItem('name', name).done();

    AsyncStorage.setItem('phone', phone).done();

    AsyncStorage.setItem('email', email).done();

    this.setState({name: name, persistedName: name, phone: phone, persistedPhone: phone, email: email, persistedEmail: email })
  }

  check(){

    AsyncStorage.getItem('name').then((name) => {
        this.setState({name: name, persistedName: name})
    })

    AsyncStorage.getItem('phone').then((phone) => {
      this.setState({phone: phone, persistedPhone: phone})
    })
    AsyncStorage.getItem('phone').then((phone) => {
      this.setState({email: email, persistedEmail: email})
    })
  }

  clearData(){
    AsyncStorage.clear();
    this.setState({persistedPhone: '', persistedName: '', persistedEmail:''})
  }

  componentWillMount(){
    this.check();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
           Profile Data
        </Text>

      <Text>Name</Text>
      <TextInput
       value={this.state.name}
       onChangeText={(text) => this.setState({name: text})}
       style={styles.input} />

       <Text>Phone</Text>
       <TextInput
       value={this.state.phone}
       onChangeText={(text) => this.setState({phone: text})}
       style={styles.input} />

       <Text>Email</Text>
       <TextInput
       value={this.state.email}
       onChangeText={(text) => this.setState({email: text})}
       style={styles.input} />

        <TouchableHighlight
          style={styles.button}
          onPress={this.persistData}
          underlayColor="white">
          <Text style={styles.buttonText}> SAVE </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={this.clearData}
          underlayColor="white">
          <Text style={styles.buttonText}> CLEAR </Text>
        </TouchableHighlight>
        <View>
          <Text>Profile Data:</Text>
          <Text>Name: {this.state.persistedName}</Text>
          <Text>Phone: {this.state.persistedPhone}</Text>
          <Text>Email: {this.state.persistedGender}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20
  },
  button: {
    height: 45,
    width:60,
    flexDirection: 'row',
    backgroundColor: '#006289',
    borderColor: 'white',
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  input: {
    height: 40,
    width:150,
    color: 'black'
  },
});

