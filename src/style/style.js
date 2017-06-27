import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
homeGridMargin:{
  // marginTop:100,
  marginLeft:10
},
container: {
  flex: 1,
  // marginTop: 100
},
containerHome:{
  // marginTop:50
},
colContentHome:{
  // marginTop:300
},
col1Home:{
  backgroundColor: 'red',
  height: 200,
  margin: 10
},
col1Text:{
  margin: 10
},

colAbout:{
  height: 200,
  // marginTop: 50,
  flex: 1,
},
colTopics:{
	height: 200,
  // marginTop: 50,
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
},
routeCustom:{
  backgroundColor: '#fff',
  flex:1
},

titleStyle: {
    backgroundColor: '#fff',
    color: 'blue',
    fontSize: 16,
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingLeft: 40,
},
header: {
  backgroundColor: '#5cafec',
  },
  menuCustom:{
  flex: 1, 
  flexDirection: 'row', 
  justifyContent: 'flex-end',
 

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
  }

})
export default styles