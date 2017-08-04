import React, {Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image,ListView,ScrollView,StatusBar} from 'react-native';
import {Right, Icon, ListItem,List,Header,Body,Title} from 'native-base';
import  customListView from './customListView.json'
import {Actions} from 'react-native-router-flux' 

export default class AppBody extends Component {
   constructor(){
        super()
        this.state ={
            data:[],

          }
          this.getData =this.getData.bind(this);
    }

    getData(){
      const data = customListView;
      this.setState({data})  
    }
    componentDidMount() {
        this.getData();
    }
    render() {
      let data = this.state.data;
          return (

                  <View style={styles.container}>
                    <Header style={{backgroundColor:'#fff'}}>
                      <Body>
                        <Title style={{color:'blue'}}>
                          ListView Example
                        </Title>
                      </Body>
                    </Header>
                       <ScrollView>{data.map(item =>
                          <List key={item.id}>
                            <ListItem>
                              <Image style={styles.photo} source={{uri:item.image}}/>
                                <Text >{item.id}</Text>
                              <Text style={styles.textCustom} >{item.description}</Text>
                            </ListItem>
                          </List>
                              )}   
                       </ScrollView>
                </View>
                )

       
}
}

const styles = StyleSheet.create ({
   container: {
      flex:1,
   },
    
    photo: {
    height: 50,
    width: 50,
    borderRadius: 20,
  },
  textCustom:{
    fontSize:16, 
  },

  titleCustom:{
    backgroundColor:"blue"
    
  },
 
  statusbarHidden:{
    backgroundColor:'#fff'
  }
   
})
