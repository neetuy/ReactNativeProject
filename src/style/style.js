import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
containerHome:{
  marginTop:10
},
colContentHome:{
  marginTop:300
},
col1Home:{
  backgroundColor: 'red',
  height: 200,
  margin: 10
},
colAbout:{
  height: 200,
  marginTop: 50,
  flex: 1,
},
colTopics:{
	height: 200,
  marginTop: 50,
  flex: 1,
},
row1Home:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',

},
 wrapper: {
  flex: 1,
  backgroundColor: '#3498db', 
},
logoContainer: {
  flexGrow:1,
  alignItems: 'center',
  justifyContent: 'center'
},
logo: {
  width: 100,
  height: 100,
},
title: {
  color: '#fff',
  marginTop: 10,
  width: 100,
  textAlign:'center'
},
containerLoginForm:{
  padding: 20
},
inputLoginForm:{
  height:40,
  color: '#fff',
  backgroundColor: 'rgba(255,255,255,0.2)',
  marginBottom: 40,
  paddingHorizontal: 10
},
buttonContainerLoginForm:{
  backgroundColor: '#2980b9',
  paddingVertical: 15
},
buttonTextLoginForm:{
  textAlign: 'center',
  color: '#fff'
}

})
export default styles