import React, {Component} from 'react';

import  {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  ViewPagerAndroid,
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'

class ViewPagerAndroidExample extends Component {
	constructor(){
		super()
			this.state = {
			    images:[
						require('./img/nature1.jpg'),
						require('./img/nature2.jpg'),
						require('./img/nature3.jpg'),
						require('./img/nature4.jpg'),
						require('./img/nature5.jpg'),
			]
			}
		
	}
	componentDidMount() {
        SplashScreen.hide();
        
    }
  render() {
    let images = this.state.images.map((uri,key)=>{
    	return <Image key={key} source={uri}/>
    }) 
    return (
      <View style={styles.container}>
        <ViewPagerAndroid
          style={styles.viewPager}
          initialPage={0}
          scrollEnabled={true}
          pageMargin={10}
          ref={viewPager => { this.viewPager = viewPager}}>
          {images}
        </ViewPagerAndroid>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 300,
    height: 200,
    padding: 20,
  },
  
  
  viewPager: {
    flex: 1,
  },
  pageStyle: {
       
        alignItems: 'center',
        padding: 20,
      }
});

module.exports = ViewPagerAndroidExample;