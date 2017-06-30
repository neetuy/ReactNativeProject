import React, { Component } from 'react';
import { Container, Content, List, ListItem,Icon} from 'native-base';
import { View, Text, TouchableOpacity } from 'react-native';

const ListExample = () => {
  return (
    <Container>
      <Content style={{backgroundColor:'#000'}}>
        <List>
          <ListItem style={{borderBottomWidth: 0}}> 
              <Icon name="ios-person" style={{color:'#fff'}}/>
          </ListItem>
          <ListItem  style={{borderBottomWidth: 0}}>
             <Icon name="ios-search" style={{color:'#fff'}}/>
          </ListItem >
          <ListItem  style={{borderBottomWidth: 0}}>
              <Icon name="timer" style={{color:'#fff'}}/>
          </ListItem>
          <ListItem  style={{borderBottomWidth: 0}}>
              <Icon name="create" style={{color:'#fff'}}/>
          </ListItem>
          <ListItem  style={{borderBottomWidth: 0}}>
              <Icon name="ios-copy" style={{color:'#fff'}}/>
          </ListItem>
          <ListItem  style={{borderBottomWidth: 0}}>
              <Icon name="settings" style={{color:'#fff'}}/>
          </ListItem>
           <ListItem style={{borderBottomWidth: 0}}>
              <Icon name="bookmark" style={{color:'#fff'}}/>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};
 export default ListExample 