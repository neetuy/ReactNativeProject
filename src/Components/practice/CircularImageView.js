import React, {Component} from 'react';
import {View,Text, Image,StyleSheet} from 'react-native';

export default class CircularImage extends Component{
render(){
	return(
		<View style={styles.container}>
		<Image style={styles.circularImage} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSmNHv5TnQkNBAN6mf64n6MWZMGLpRkPrdgf_EZHBwSCWF9XuF6A"}}/>
		</View>
		)
}
}

const styles = StyleSheet.create({
container:{
	marginTop:60,
	justifyContent:'center',
	alignItems:'center'
},
circularImage:{
	width:300,
	height:300,
	borderRadius:150,
}
})
