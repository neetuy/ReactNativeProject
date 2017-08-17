import React, {Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image,ListView,ScrollView,StatusBar,RefreshControl} from 'react-native';
import {Right, Icon, ListItem,List,Header,Body,Title,Card} from 'native-base';
import  customListView from './customListView.json'
import {Actions} from 'react-native-router-flux' 
import SplashScreen from 'react-native-splash-screen'


export default class AppBody extends Component {
   constructor(){
        super()
        this.state ={
            data:[],
            refreshing: false,

          }
          this.getData =this.getData.bind(this);
    }

    getData(){
      const data = customListView;
      this.setState({data})  
    }
    componentDidMount() {
        SplashScreen.hide();
        this.getData();
    }
     _onRefresh() {
      const data = customListView;
        this.setState({refreshing: true});
        this.setState({data});
        this.setState({refreshing: false});
        
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
                   <ScrollView horizontal={true}>
                       {data.map(item =>
                        <Card style={{height:100, width:200}}>
                          <List key={item.id} style={{ borderBottomWidth:0, margin:10}}>
                            <ListItem style={{borderBottomWidth:0}}>
                              <Image style={styles.photo} source={{uri:item.image}}/>
                                <Text >{item.id}</Text>
                              <Text>{item.description}</Text>
                            </ListItem>
                          </List>
                        </Card>
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
    height: 45,
    width: 45,
    borderRadius: 22,
    
  },
  textCustom:{
    fontSize:14, 
    padding:10,
    margin:10
    
  },

  titleCustom:{
    backgroundColor:"blue"
    
  },
 
  statusbarHidden:{
    backgroundColor:'#fff'
  }
   
})

