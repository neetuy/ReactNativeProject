import React, {Component} from 'react'
import { View, Text,  AppRegistry } from 'react-native';
import {Icon} from 'native-base'
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import styles from '../../style/style';

const MenuExample = () => {
    return(
        <MenuContext>
            <TopNavigation/>
        </MenuContext>
        )
    
}
  
const TopNavigation = () => (
  <View style={styles.menuCustom}>
    <Menu onSelect={(value) => alert(`User selected the number ${value}`)}>
      <MenuTrigger>
        <Text style={{ fontSize: 20 }}><Icon name="menu"/></Text>
      </MenuTrigger>
      <MenuOptions style={styles.menuOptionCustom}>
        <MenuOption value={1}>
          <Text>One</Text>
        </MenuOption >
        <MenuOption value={2}>
          <Text>Two</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  </View>
);

export default MenuExample

