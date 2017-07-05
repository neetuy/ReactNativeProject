import React, {Component} from 'react';
import {Text,View} from 'react-native';
import {Content, Card, CardItem, Body,List,ListItem} from 'native-base';
import  fileName from './fileName.json'

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
    render() {
      let data = this.state.data;
          return (
                  <Card>
                    <CardItem>
                       <View>{data.map(item =>

                        <List>
                        <ListItem style={{borderBottomWidth: 0}}><Text key={item.id}>{item.id}</Text></ListItem>
                        <ListItem style={{borderBottomWidth: 0}}><Text key={item.first_name}>{item.first_name}</Text></ListItem>
                        <ListItem style={{borderBottomWidth: 0}}><Text key={item.last_name}>{item.last_name}</Text></ListItem>
                        <ListItem style={{borderBottomWidth: 0}}><Text key={item.email}>{item.email}</Text></ListItem>
                        </List>
                        )}
                       </View>
                    </CardItem>
                </Card>
                )

       
}
}
