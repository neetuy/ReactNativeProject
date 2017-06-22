import React from 'react';
import {StyleSheet, Text, View, ViewPropTypes} from "react-native";
import {Container,Content, List, ListItem} from 'native-base';


const TabView = (props, context) => {
  const drawer = context.drawer;
  return (
    <Container>
      <Content>
        <List>
          <ListItem >
              <Text>Simon Mignolet</Text>
          </ListItem>
          <ListItem>
              <Text>Nathaniel Clyne</Text>
          </ListItem>
          <ListItem>
              <Text>Dejan Lovren</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default TabView;