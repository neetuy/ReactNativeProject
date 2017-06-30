import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Icon, Right} from 'native-base'
import {Actions} from 'react-native-router-flux'

class ListViewDemo1 extends Component {

   state = {
      names: [
         {
            id: 0,
            name: '1',
         },
         {
            id: 1,
            name: '2',
         },
         {
            id: 2,
            name: '3',
         },
         {
            id: 3,
            name: '4',
         }
      ]
   }

   goToHeaderTabs = () => {
      Actions.headerTabs()
   }
   render() {
      return (
      <View>
         <View>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {this.goToHeaderTabs}
                  >
                     <Text style={styles.text}>
                        {item.name}
                     </Text>
                     <Right>
                        <Icon name="ios-arrow-forward"/>
                     </Right>
                  </TouchableOpacity>
               ))
            }
         </View>
         <View>
      
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
   text: {
      color: '#4f603c'
   }
})
export default ListViewDemo1