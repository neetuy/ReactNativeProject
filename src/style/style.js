import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //loginPagecss
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
},
routeCustom:{
  backgroundColor: '#2060a5',

},
//HomePagecss

col1Home:{
  backgroundColor: '#fff',
  width:50,
  margin: 10
},
row1Home:{
  flex: 3  
},
col1Text:{
  margin: 10
},

headerCustom:{
  backgroundColor:'#2127a5'
},

  menuOptionCustom:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    position: 'absolute', 
    zIndex: -1 
  },
  MenuContextCustom:{
    flex:1,
  },
  
})
export default styles