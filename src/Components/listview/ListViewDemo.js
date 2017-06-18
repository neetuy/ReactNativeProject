import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class ListViewDemo extends Component {

   state = {
      names: [
         {
            id: 0,
            name: '5',
         },
         {
            id: 1,
            name: '6',
         },
         {
            id: 2,
            name: '7',
         },
         {
            id: 3,
            name: '8',
         }
      ]
   }

   alertItemName = (item) => {
      alert(item.name)
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
                     onPress = {() => this.alertItemName(item)}
                  >
                     <Text style={styles.text}>
                        {item.name}
                     </Text>
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
      padding: 10,
      marginTop: 8,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})
export default ListViewDemo