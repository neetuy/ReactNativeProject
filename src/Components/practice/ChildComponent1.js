
import React, {Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';
import {Right, Icon} from 'native-base';
import  fileName from './../JsonExample/fileName.json'
import {Actions} from 'react-native-router-flux'
export default class AppBody extends Component {
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
    goToHeaderTabs = () =>{
      Actions.headerTabs()
    }
    render() {
      let data = this.state.data;
          return (
                  <View>
                       <View>{data.map(item =>
                        <TouchableOpacity
                        style = {styles.container}
                        onPress ={this.goToHeaderTabs}
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

