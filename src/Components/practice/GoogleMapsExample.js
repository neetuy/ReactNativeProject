import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TextInput,
  TouchableHighlight,
  Dimensions,
 //MapView,
} from 'react-native';

import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    flex: 1,
    alignItems: 'center'
  },
  inputText: {
    height: 36,
      padding: 4,
      marginRight: 5,
      flex: 4,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#48BBEC',
      borderRadius: 8,
      color: '#48BBEC'
  }
});

class MapPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            region:{
                latitude: 45.65,
                longitude: -78.90,
            latitudeDelta: 10,
            longitudeDelta: 5
            }
        }
    }

    render() {

        return(
            <View style={styles.container}>
                <TextInput style={styles.inputText}></TextInput>
                <MapView 
                    style={ styles.map }
                    mapType={"standard"}
                    region={this.state.region}
                    zoomEnabled={true}
                    scrollEnabled={true}
                    showsScale={true}
                  >
                  <MapView.Marker
                    coordinate={{latitude: 45.65,
                    longitude: -78.90}}
                    title={"title"}
                    description={"description"}
                 />
                  </MapView>
            </View>
            )
      }
    }


module.exports = MapPage;