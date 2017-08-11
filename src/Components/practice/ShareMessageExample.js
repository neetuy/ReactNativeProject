
import React, {Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Share} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

export default class ShareLesson extends Component {

  constructor(props) {
    super(props);
    this._shareMessage = this._shareMessage.bind(this);
    this._showResult = this._showResult.bind(this);
    this.state = { result: ''};
  }

  _showResult(result) {
    this.setState({result});
  }

  _shareMessage() {
    Share.share({
      message: 'This is a simple shared message'
    }).then(this._showResult);
  }
  componentDidMount() {
        SplashScreen.hide();
        
    }
  render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this._shareMessage}>
                  <Text >
                    Share
                  </Text>
          </TouchableOpacity>
          <Text>
            {JSON.stringify(this.state.result)}
          </Text>
        </View>
        )
  }
}
const styles = StyleSheet.create ({
   container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center'

   },
 })