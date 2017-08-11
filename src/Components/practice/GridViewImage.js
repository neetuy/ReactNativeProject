// import React, {Component} from 'react';
// import {View,Text, Image,StyleSheet} from 'react-native';

// export default class CircularImage extends Component{
// render(){
// 	return(
// 		<View style={styles.container}>
// 		<Image style={styles.circularImage} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSmNHv5TnQkNBAN6mf64n6MWZMGLpRkPrdgf_EZHBwSCWF9XuF6A"}}/>
// 		</View>
// 		)
// }
// }

// const styles = StyleSheet.create({
// container:{
// 	marginTop:60,
// 	justifyContent:'center',
// 	alignItems:'center'
// },
// circularImage:{
// 	width:300,
// 	height:300,
// 	borderRadius:150,
// }
// })


import React, {Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SliderIOS
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

var windowWidth = require('Dimensions').get('window').width;
var IMAGES_PER_ROW = 3;

export default class FlexImageDemo extends Component{
	constructor(){
		super()
		this.state = {
			value:1,
			images:[
			require('./img/man1.jpg'),
			require('./img/man2.jpg'),
			require('./img/man3.jpg'),
			],
			images1:[
			require('./img/woman1.jpg'),
			require('./img/woman2.jpg'),
			require('./img/woman3.jpg'),
			]

		}
	}
	componentDidMount() {
        SplashScreen.hide();
        
    }
    calculatedSize(){
  		var size = windowWidth / IMAGES_PER_ROW
  		return {width: size, height: 200}
	}
  render(){
    
    let image = this.state.images.map((uri,key)=>{
    	return <Image style={[this.calculatedSize()]} key={key} source={uri}/>
    }) 
    let image1 = this.state.images1.map((uri,key)=>{
    	return <Image style={[this.calculatedSize()]} key={key} source={uri}/>
    }) 
    return (
    <View style={styles.container}>
    <View style={styles.image}>			
    	{image}
  	</View>
  	<View style={styles.image1}>			
    	{image1}
  	</View>
  	</View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    backgroundColor: '#F5FCFF',
    padding:2,
    margin:2

  },
  image:{

  	flexDirection:'row',
  	padding:2,
  	margin:2
  },
  image1:{

  	flexDirection:'row',
  	padding:2,
  	margin:2
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  slider: {
    alignSelf: 'stretch',
    height: 10,
    margin: 10,
  },
});