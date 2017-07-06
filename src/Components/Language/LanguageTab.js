import React, {Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image} from 'react-native';
import { Icon,Button,Container,Right} from 'native-base';
import {Navigator, TabNavigator} from 'react-navigation'
import  fileName from './../JsonExample/fileName.json'

export default class LanguageTab extends Component {

  constructor(){
        super()
        this.state ={
            data:[]     
          }
          this.getData =this.getData.bind(this);
    }

    getData(){
      const data = fileName;
      this.setState({data})  
    }
    componentDidMount() {
        this.getData();
    }

  static navigationOptions = {
    tabBarLabel: 'Language',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Icon name="menu" />
    ),
  };

  render() {
    let data = this.state.data;
    return (
      <View>
           <View>{data.map(item =>
            <TouchableOpacity
            style = {styles.container}
             onPress={() => this.props.navigation.navigate('VersionTab')}
            >
              <Text key={item.id}>{item.id}</Text>
              <Right>
                <Icon name="ios-arrow-forward"/>
              </Right>
              </TouchableOpacity>
              )}
           
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
   
})