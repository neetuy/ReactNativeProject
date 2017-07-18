import React , {Component} from 'react'
import { AppRegistry, StyleSheet, Text, View, ScrollView, TouchableHighlight }  from 'react-native'
import ContactList from './ContactList'
import Contacts from 'react-native-contacts'

export default class AddressbookDemo extends Component{
  constructor(){
    super()
    this.state = {
      contacts: [],
    }
    this.loadContacts = this.loadContacts.bind(this);
    this.newContact = this.newContact.bind(this);
  }

  loadContacts(){
    Contacts.getAll( (err, contacts) => {
      console.log('GET CONTACTS', err, contacts)
      if(err && err.type === 'permissionDenied'){
        
      }
      else{
        this.setState({contacts: contacts})
      }
    })
  }

  newContact(){
    var newPerson = {
      lastName: "dsgdfs",
      firstName: "fdhfgsjhf",
      emailAddresses: [{
        label: "sgfdhg",
        email: "zxvzxfgdf@zxv.com",
      }]
    }

    Contacts.addContact(newPerson, (err) => {
      console.log('NEW CONTACT', err, newPerson)
    })
  }

 
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.note}>
          all actions are console.logged
        </Text>
        <TouchableHighlight style={styles.button} onPress={this.loadContacts}>
          <Text>Load Contacts</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this.newContact}>
          <Text>Create Contact</Text>
        </TouchableHighlight>
        <ContactList contacts={this.state.contacts} />
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
  },
  note: {
    fontSize:20,
    fontWeight:'bold',
  },
  button: {
    backgroundColor: 'rgba(0,0,0,.6)',
    padding:5,
    borderRadius:3,
    borderWidth:1,
    margin: 5,
    borderColor: 'rgba(0,0,0,.8)'
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
  },
});