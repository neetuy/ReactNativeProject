
// import React, { Component } from 'react'
// import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native'
// import SplashScreen from 'react-native-splash-screen'

// export default class Animations extends Component {
//    componentWillMount = () =>{
//       this.animatedWidth = new Animated.Value(50)
//       this.animatedHeight = new Animated.Value(100)
//    }
//    animatedBox = () => {
//       Animated.timing(this.animatedWidth, {
//          toValue: 200,
//          duration: 1000
//       }).start()
//       Animated.timing(this.animatedHeight, {
//          toValue: 500,
//          duration: 500
//       }).start()
//    }
//     componentDidMount() {
//       SplashScreen.hide();
//     }
//    render() {
//       const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight }
//       return (
//          <TouchableOpacity style = {styles.container} onPress = {this.animatedBox}>
//             <Animated.View style = {[styles.box, animatedStyle]}/>
//          </TouchableOpacity>
//       )
//    }
// }


// const styles = StyleSheet.create({
//    container: {
//       flex:1,
//       justifyContent: 'center',
//       alignItems: 'center'
//    },
//    box: {
//       backgroundColor: 'blue',
//       width: 50,
//       height: 100
//    }
// })



import React, { Component } from 'react'
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

export default class Animations extends Component {
   componentWillMount = () =>{
     this._animatedDirectionY = new Animated.Value(0);
     this._animatedDirectionX = new Animated.Value(0);
   }
   componentDidMount = () => {
      SplashScreen.hide();
     Animated.timing(this._animatedDirectionY, {
        toValue: 500,
        duration: 500
    }).start();
     Animated.timing(this._animatedDirectionX, {
        toValue: 500,
        duration: 500
    }).start();
   }
   render() {
      const animatedStyleX = { left: this._animatedDirectionX}
      const animatedStyleY = { top: this._animatedDirectionY}
      return(
         <View style={styles.container}>
            <Animated.View 
              style={[styles.box, animatedStyleX]}
            />
           
      </View>
         )
   }
}


var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
       backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 100,
    height: 100
  }
});


