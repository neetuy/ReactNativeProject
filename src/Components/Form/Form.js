import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

const Form = props => {
  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input}
      placeholder="id" 
      />
      <TextInput 
      style={styles.input}
      placeholder="name" 
      />
      <TextInput 
      style={styles.input}
      placeholder="phone" 
      />
      <TextInput 
      style={styles.input}
      placeholder="email" 
      />
      <TouchableOpacity>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250
  },
  container: {
    flex:1,
    padding:20,
    marginLeft:50
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 37,
    width: 250,
    padding:10,
    borderBottomWidth:0
  }
})