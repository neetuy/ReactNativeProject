import React, {PropTypes ,Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Icon, Right} from 'native-base'
import {Actions} from 'react-native-router-flux'

class GridExample extends Component {
  constructor(props) {
      super(props);
    }

   state = {
      names: [
         {
            id: 0,
            name: 'a',
         },
         {
            id: 1,
            name: 'b',
         },
         {
            id: 2,
            name: 'c',
         },
         {
            id: 3,
            name: 'd',
         }
      ]
   }

   goToGridExample1 = () => {
      Actions.gridOne()
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
                     onPress = {()=>null}
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

export default GridExample