import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

const About = () => {

   const goToLogin = () => {
      Actions.login()
   }

   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToLogin}>
         <Text>Go to Login</Text>
      </TouchableOpacity>
   )
}

export default About