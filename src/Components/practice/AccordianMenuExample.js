import React, {Component} from 'react'
import {AppRegistry,StyleSheet,Text,ScrollView} from 'react-native';
import {List,ListItem} from 'native-base';
import Panel from './Panel';
import SplashScreen from 'react-native-splash-screen'

export default class AccordianMenuExample extends Component{
    componentDidMount() {
        SplashScreen.hide();
        
    }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Panel title="A Panel with short content text">
            <Panel title="A Panel with 1">
            <List>
                <ListItem>
                    <Text>
                        1
                    </Text>
                </ListItem>
                <ListItem>
                    <Text>
                        2
                    </Text>
                </ListItem>
                <ListItem>
                    <Text>
                        3
                    </Text>
                </ListItem>
            </List>
            </Panel> 
            <Panel title="A Panel with 2">
                <ListItem>
                    <Text>
                        2
                    </Text>
                </ListItem>
            </Panel>  
            <Panel title="A Panel with 3">
                <ListItem>
                    <Text>
                        3
                    </Text>
                </ListItem>
            </Panel>    
        </Panel>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex            : 1,
    backgroundColor : '#f4f7f9',
    paddingTop      : 30
  },
  
})
