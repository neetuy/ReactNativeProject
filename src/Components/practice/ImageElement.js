import React, {Component} from 'react';
import {View,Text, Image,StyleSheet} from 'react-native';

export default class CircularImage extends Component{
render(){
	return(
	<View>
		<Image source={this.props.imgsource} style={styles.Image}/>
	</View>
	)
	}
}

const styles = StyleSheet.create({
Image:{
	flex:1,
	width:null,
	alignSelf:'stretch'
}
})